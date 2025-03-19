import { Star, Map, Image } from 'lucide-react';
const AdditionalFeatures = () => {
  return <section className="container mx-auto px-6 py-20">
      <h2 className="section-title text-center">Additional Features</h2>
      <p className="section-subtitle text-center">Our platform offers a range of features to enhance your TRNC travel experience</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Tailored Recommendations */}
        <div className="feature-card">
          <div className="w-14 h-14 rounded-full bg-ocean/10 flex items-center justify-center mb-6">
            <Star size={24} className="text-ocean" />
          </div>
          <h3 className="feature-title">Tailored Recommendations</h3>
          <p className="feature-description">
            Receive personalized recommendations based on your preferences, interests, and travel history. Our AI learns what you love and suggests experiences you'll enjoy.
          </p>
          <div className="mt-6">
            
          </div>
        </div>

        {/* Popular Itineraries */}
        <div className="feature-card">
          <div className="w-14 h-14 rounded-full bg-ocean/10 flex items-center justify-center mb-6">
            <Map size={24} className="text-ocean" />
          </div>
          <h3 className="feature-title">Popular Itineraries</h3>
          <p className="feature-description">
            Explore curated itineraries designed by travel experts and fellow travelers. From weekend getaways to week-long adventures, find the perfect plan for your TRNC trip.
          </p>
          <div className="mt-6">
            
          </div>
        </div>

        {/* Photos, Maps & Reviews */}
        <div className="feature-card">
          <div className="w-14 h-14 rounded-full bg-ocean/10 flex items-center justify-center mb-6">
            <Image size={24} className="text-ocean" />
          </div>
          <h3 className="feature-title">Photos, Maps & Reviews</h3>
          <p className="feature-description">
            Access high-quality photos, interactive maps, and authentic reviews from other travelers to help you plan your perfect Northern Cyprus adventure.
          </p>
          <div className="mt-6">
            
          </div>
        </div>
      </div>
    </section>;
};
export default AdditionalFeatures;