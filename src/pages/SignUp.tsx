import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Mail, Lock, ArrowRight, User } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import PageLayout from '@/components/PageLayout';
import { useAuth } from '@/store/AuthProvider';
import { useEffect } from "react";
import { signUpUser } from '@/api/users/signup';

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: 'First name must be at least 2 characters long'
  }),
  lastName: z.string().min(2, {
    message: 'Last name must be at least 2 characters long'
  }),
  email: z.string().email({
    message: 'Please enter a valid email address'
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters long'
  }).regex(/[A-Z]/, {
    message: 'Password must contain at least one uppercase letter'
  }).regex(/[0-9]/, {
    message: 'Password must contain at least one number'
  }),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

type FormData = z.infer<typeof formSchema>;

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { isAuthenticated } = useAuth(); 
  const { toast } = useToast();
  const { login } = useAuth(); 
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard"); 
    }
  }, [isAuthenticated, navigate]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = async (data: FormData) => {
    console.log('Sign up data:', data);
    
    try {
      const response = await signUpUser(data.firstName, data.lastName, data.email, data.password);
      console.log(response.accessToken);
      login(response.accessToken);
         
      toast({
        title: `Welcome ${data.firstName}`,
        description: "You've successfully created an account."
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Invalid email or password. Please try again."
      });
    }

  };

  return <PageLayout>
      <div className="container mx-auto max-w-md px-6 py-[80px]">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Create your account</h1>
          <p className="text-gray-600">Join SmartTRNC to discover Northern Cyprus</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <FormField control={form.control} name="firstName" render={({
                field
                }) => <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input placeholder="John" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />

                <FormField control={form.control} name="lastName" render={({
                field
                }) => <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input placeholder="Doe" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
              </div>

              <FormField control={form.control} name="email" render={({
              field
              }) => <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input placeholder="your@email.com" className="pl-10" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />

              <FormField control={form.control} name="password" render={({
              field
              }) => <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input type={showPassword ? 'text' : 'password'} placeholder="********" className="pl-10" {...field} />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />

              <FormField control={form.control} name="confirmPassword" render={({
              field
              }) => <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input type={showConfirmPassword ? 'text' : 'password'} placeholder="********" className="pl-10" {...field} />
                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-3 text-gray-400 hover:text-gray-600">
                          {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />

              <Button type="submit" className="w-full">
                Sign Up <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Form>

          <div className="mt-6">
            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-200 w-5"></div>
              <div className="bg-white px-3 text-sm text-gray-500">or continue with</div>
              <div className="border-t border-gray-200 w-5"></div>
            </div>

            <Button variant="outline" className="w-full mt-4">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Sign up with Google
            </Button>
          </div>

          <p className="text-center mt-8 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-ocean hover:text-ocean-dark font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </PageLayout>;
};

export default SignUp;
