import { useState, useRef } from 'react';
import { Camera, CameraOff, RefreshCw, Image, Info, X, Scan, MapPin, HistoryIcon, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import PageLayout from '@/components/PageLayout';
import { useIsMobile } from '@/hooks/use-mobile';

// Sample AR points of interest for background processing
const arLocations = [{
  id: 'ar1',
  name: 'Kyrenia Castle',
  description: 'A 16th-century castle with Byzantine elements. AR view shows medieval appearance.',
  coordinates: '35.341219, 33.316131'
}, {
  id: 'ar2',
  name: 'Bellapais Abbey',
  description: 'Gothic monastery from the 13th century. AR shows complete original structure.',
  coordinates: '35.305811, 33.354597'
}, {
  id: 'ar3',
  name: 'Salamis Ruins',
  description: 'Ancient Greek city-state ruins. AR displays complete amphitheater as it once appeared.',
  coordinates: '35.184722, 33.900833'
}, {
  id: 'ar4',
  name: 'St. Hilarion Castle',
  description: 'Castle that inspired Disney\'s Snow White castle. AR recreates the medieval fortress.',
  coordinates: '35.328056, 33.273889'
}];
const ARView = () => {
  const [cameraActive, setCameraActive] = useState(false);
  const [detectedLocation, setDetectedLocation] = useState<string | null>(null);
  const [scanningEffect, setScanningEffect] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    toast
  } = useToast();
  const isMobile = useIsMobile();
  const toggleCamera = async () => {
    try {
      if (cameraActive) {
        // Stop camera
        if (videoRef.current && videoRef.current.srcObject) {
          const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
          tracks.forEach(track => track.stop());
          videoRef.current.srcObject = null;
        }
        setCameraActive(false);
        setDetectedLocation(null);
        setScanningEffect(false);
      } else {
        // Start camera
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment'
          }
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setCameraActive(true);
        setScanningEffect(true);
        toast({
          title: "AR Explorer activated",
          description: "Scanning for historical sites..."
        });

        // Simulate finding a location after a few seconds
        setTimeout(() => {
          setScanningEffect(false);
          const randomLocation = arLocations[Math.floor(Math.random() * arLocations.length)];
          setDetectedLocation(randomLocation.id);
          toast({
            title: "Site detected",
            description: `Found: ${randomLocation.name}`
          });
        }, 4000);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      toast({
        title: "Camera access denied",
        description: "Please allow camera access to use the AR features.",
        variant: "destructive"
      });
    }
  };
  const switchCamera = () => {
    toast({
      title: "Camera switched",
      description: "Now using the opposite camera."
    });

    // Simulate a scanning effect
    setScanningEffect(true);

    // Simulate a detected location after camera switch
    setTimeout(() => {
      setScanningEffect(false);
      const randomLocation = arLocations[Math.floor(Math.random() * arLocations.length)];
      setDetectedLocation(randomLocation.id);
    }, 2000);
  };
  const captureSnapshot = () => {
    toast({
      title: "Snapshot captured",
      description: "Your AR snapshot has been saved to your gallery."
    });
  };
  const resetView = () => {
    setDetectedLocation(null);
    setScanningEffect(true);
    toast({
      title: "View reset",
      description: "Scanning for new historical sites..."
    });

    // Simulate finding a new location after reset
    setTimeout(() => {
      setScanningEffect(false);
      // Sometimes show no results after reset
      if (Math.random() > 0.3) {
        const randomLocation = arLocations[Math.floor(Math.random() * arLocations.length)];
        setDetectedLocation(randomLocation.id);
      }
    }, 3000);
  };
  return <PageLayout>
      <div className="container mx-auto px-4 max-w-4xl py-[66px]">
        {!cameraActive && <div className="space-y-6 py-[49px]">
            <div className="text-center mt-10 mb-8">
              <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-ocean to-blue-600 bg-clip-text text-transparent">AR Explorer</h1>
              <p className="text-gray-600 dark:text-gray-300">Discover the hidden history of Northern Cyprus</p>
            </div>
            
            {/* Instruction Card */}
            <Card className="glassmorphism border-none bg-gradient-to-br from-ocean/5 to-transparent">
              <CardContent className="pt-6">
                <div className="flex space-x-4 items-start">
                  <div className="mt-1 p-2 rounded-full bg-ocean/10 dark:bg-ocean/20">
                    <Info size={24} className="text-ocean" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">How to use AR Explorer</h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-ocean/10 dark:bg-ocean/20 flex items-center justify-center">
                          <Camera size={14} className="text-ocean" />
                        </div>
                        <span>Tap <strong>Start AR Camera</strong> to activate your camera</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-ocean/10 dark:bg-ocean/20 flex items-center justify-center">
                          <Scan size={14} className="text-ocean" />
                        </div>
                        <span>Point your device at historical sites around you</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-ocean/10 dark:bg-ocean/20 flex items-center justify-center">
                          <MapPin size={14} className="text-ocean" />
                        </div>
                        <span>The app will automatically recognize landmarks</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-ocean/10 dark:bg-ocean/20 flex items-center justify-center">
                          <Layers size={14} className="text-ocean" />
                        </div>
                        <span>View historical overlays and information in real-time</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-ocean/10 dark:bg-ocean/20 flex items-center justify-center">
                          <Image size={14} className="text-ocean" />
                        </div>
                        <span>Capture snapshots to save your AR experience</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Start Camera Button */}
            <div className="flex justify-center mt-8">
              <Button onClick={toggleCamera} size="lg" variant="default" className="bg-gradient-to-r from-ocean to-ocean-light hover:from-ocean-dark hover:to-ocean text-white font-medium px-8 py-6 h-auto rounded-xl shadow-lg shadow-ocean/20 hover:shadow-xl hover:shadow-ocean/30 transition-all duration-300 flex items-center gap-3 w-full max-w-sm">
                <Camera size={24} />
                Start AR Explorer
              </Button>
            </div>
          </div>}
        
        {cameraActive && <div className="relative flex flex-col h-[calc(100vh-175px)] mt-2">
            {/* Camera View (80% of screen) */}
            <div className="relative flex-grow overflow-hidden rounded-2xl bg-gray-900 shadow-xl">
              <video ref={videoRef} autoPlay playsInline className="absolute min-w-full min-h-full object-cover" />
              
              {/* Scanning Effect Overlay */}
              {scanningEffect && <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="relative">
                    <div className="w-64 h-64 border-2 border-ocean rounded-full absolute animate-ping opacity-30"></div>
                    <div className="w-64 h-64 border-2 border-ocean rounded-full absolute animate-ping opacity-20" style={{
                animationDelay: '300ms'
              }}></div>
                    <div className="w-64 h-64 border-2 border-ocean rounded-full absolute animate-ping opacity-10" style={{
                animationDelay: '600ms'
              }}></div>
                    <div className="w-64 h-64 border-2 border-ocean rounded-full flex items-center justify-center">
                      <Scan size={40} className="text-ocean animate-pulse" />
                    </div>
                  </div>
                  <div className="absolute bottom-16 left-0 right-0 text-center">
                    <div className="glassmorphism px-4 py-2 rounded-full inline-block text-sm text-gray-800 dark:text-white">
                      Scanning for historical sites...
                    </div>
                  </div>
                </div>}
              
              {/* AR Overlay Elements */}
              {detectedLocation && !scanningEffect && <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <img src="/placeholder.svg" alt="AR Overlay" className="w-2/3 h-auto max-h-2/3 opacity-80 animate-scale-in" />
                  <div className="absolute top-6 left-6 glassmorphism px-4 py-2 rounded-full inline-block animate-fade-in">
                    <div className="flex items-center gap-2">
                      <HistoryIcon size={16} className="text-ocean" />
                      <span className="text-sm font-medium text-gray-800 dark:text-white">
                        {arLocations.find(loc => loc.id === detectedLocation)?.name}
                      </span>
                    </div>
                  </div>
                </div>}
              
              {/* Camera Controls - Floating on the camera view */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-4">
                <Button variant="secondary" size="icon" onClick={switchCamera} className="glassmorphism border-none bg-white/30 dark:bg-black/30 hover:bg-white/50 dark:hover:bg-black/50 backdrop-blur-md shadow-lg w-12 h-12 rounded-full">
                  <RefreshCw size={20} className="text-white" />
                </Button>
                
                <Button variant="secondary" size="icon" onClick={captureSnapshot} className="glassmorphism border-none bg-white/30 dark:bg-black/30 hover:bg-white/50 dark:hover:bg-black/50 backdrop-blur-md shadow-lg w-12 h-12 rounded-full">
                  <Image size={20} className="text-white" />
                </Button>
                
                {detectedLocation && <Button variant="secondary" size="icon" onClick={resetView} className="glassmorphism border-none bg-white/30 dark:bg-black/30 hover:bg-white/50 dark:hover:bg-black/50 backdrop-blur-md shadow-lg w-12 h-12 rounded-full">
                    <X size={20} className="text-white" />
                  </Button>}
              </div>
              
              {/* Close camera button */}
              <Button variant="secondary" size="sm" onClick={toggleCamera} className="absolute top-4 left-4 glassmorphism border-none bg-white/30 dark:bg-black/30 hover:bg-white/50 dark:hover:bg-black/50 backdrop-blur-md shadow-md">
                <CameraOff size={16} className="mr-1 text-white" />
                <span className="text-white">Close</span>
              </Button>
            </div>
            
            {/* Results Panel (20% of screen) */}
            <div className="bg-white dark:bg-gray-900 shadow-md border border-gray-100 dark:border-gray-800 rounded-2xl mt-4 p-4 glassmorphism backdrop-blur-lg">
              <div className="h-full">
                {detectedLocation ? <div className="animate-fade-in">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-ocean to-ocean-dark rounded-full flex items-center justify-center shadow-sm">
                        <MapPin size={12} className="text-white" />
                      </div>
                      {arLocations.find(loc => loc.id === detectedLocation)?.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      {arLocations.find(loc => loc.id === detectedLocation)?.description}
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                      <MapPin size={12} className="text-gray-400" />
                      {arLocations.find(loc => loc.id === detectedLocation)?.coordinates}
                    </div>
                  </div> : <div className="h-full flex items-center justify-center text-center">
                    <p className="text-gray-500 dark:text-gray-400">
                      {scanningEffect ? "Scanning..." : "Point your camera at historical sites to see information"}
                    </p>
                  </div>}
              </div>
            </div>
          </div>}
      </div>
    </PageLayout>;
};
export default ARView;