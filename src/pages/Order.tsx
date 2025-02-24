
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, PackageCheck } from 'lucide-react';

type OrderStep = {
  id: number;
  title: string;
  description: string;
  fields: {
    name: string;
    label: string;
    type: string;
    placeholder: string;
  }[];
};

const orderSteps: OrderStep[] = [
  {
    id: 1,
    title: "Project Details",
    description: "Tell us about your website project",
    fields: [
      {
        name: "projectName",
        label: "Project Name",
        type: "text",
        placeholder: "Enter your project name"
      },
      {
        name: "businessType",
        label: "Business Type",
        type: "text",
        placeholder: "e.g., E-commerce, Corporate, Portfolio"
      }
    ]
  },
  {
    id: 2,
    title: "Website Requirements",
    description: "Specify your website's technical needs",
    fields: [
      {
        name: "features",
        label: "Required Features",
        type: "text",
        placeholder: "e.g., Online Store, Blog, Contact Form"
      },
      {
        name: "pagesCount",
        label: "Number of Pages",
        type: "number",
        placeholder: "Enter estimated number of pages"
      }
    ]
  },
  {
    id: 3,
    title: "Contact Information",
    description: "Your contact details for communication",
    fields: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name"
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter your email"
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "Enter your phone number"
      }
    ]
  }
];

const Order = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Your Website</h1>
          <p className="text-lg text-gray-600">Fill out the form below to start your website project</p>
        </div>

        {/* Steps Progress */}
        <div className="flex justify-between mb-8 relative">
          <div className="absolute top-1/2 h-1 w-full bg-gray-200 -z-10"></div>
          {orderSteps.map((step) => (
            <div 
              key={step.id}
              className={`flex items-center justify-center w-10 h-10 rounded-full 
                ${step.id <= currentStep ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}
                transition-colors duration-200`}
            >
              {step.id < currentStep ? <Check className="w-5 h-5" /> : step.id}
            </div>
          ))}
        </div>

        {/* Form */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PackageCheck className="w-6 h-6 text-primary" />
              {orderSteps[currentStep - 1].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {orderSteps[currentStep - 1].fields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <Label htmlFor={field.name}>{field.label}</Label>
                  <Input
                    id={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name] || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    className="w-full"
                  />
                </div>
              ))}

              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(prev => prev - 1)}
                  >
                    Previous
                  </Button>
                )}
                {currentStep < orderSteps.length ? (
                  <Button
                    type="button"
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    className="ml-auto"
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button type="submit" className="ml-auto">
                    Submit Order
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Order Information */}
        <div className="mt-12 grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>What You'll Get</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Professional website design tailored to your needs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Mobile-responsive layout</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>SEO optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Contact form integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Social media integration</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Order;
