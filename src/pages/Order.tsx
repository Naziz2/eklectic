import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, PackageCheck, Upload, Server, Globe, Cpu, Image, CreditCard, Building2, DollarSign, MailCheck } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type OrderStep = {
  id: number;
  title: string;
  description: string;
  fields: {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    options?: { value: string; label: string }[];
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
        type: "select",
        options: [
          { value: "ecommerce", label: "E-commerce" },
          { value: "corporate", label: "Corporate Website" },
          { value: "portfolio", label: "Portfolio" },
          { value: "blog", label: "Blog" },
          { value: "other", label: "Other" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Website Features",
    description: "Choose features for your website",
    fields: [
      {
        name: "aiFeatures",
        label: "AI Integration",
        type: "select",
        options: [
          { value: "none", label: "No AI Features" },
          { value: "basic", label: "Basic AI (Chatbot)" },
          { value: "advanced", label: "Advanced AI (Personalization & Analytics)" }
        ]
      },
      {
        name: "hosting",
        label: "Hosting Service",
        type: "select",
        options: [
          { value: "none", label: "No Hosting Needed" },
          { value: "basic", label: "Basic Hosting" },
          { value: "premium", label: "Premium Hosting" }
        ]
      },
      {
        name: "domain",
        label: "Domain Registration",
        type: "select",
        options: [
          { value: "none", label: "I already have a domain" },
          { value: "new", label: "Register new domain" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Brand Assets",
    description: "Upload your brand assets",
    fields: [
      {
        name: "logo",
        label: "Company Logo",
        type: "file"
      }
    ]
  },
  {
    id: 4,
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
      },
      {
        name: "codeReview",
        label: "Code Review Option",
        type: "select",
        options: [
          { value: "none", label: "No code review needed" },
          { value: "email", label: "Receive code review by email" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Payment Details",
    description: "Choose your payment method",
    fields: [
      {
        name: "paymentMethod",
        label: "Payment Method",
        type: "select",
        options: [
          { value: "creditCard", label: "Credit Card" },
          { value: "bankTransfer", label: "Bank Transfer" },
          { value: "paypal", label: "PayPal" }
        ]
      }
    ]
  }
];

const Order = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>('');

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, logo: logoFile });
  };

  const renderField = (field: OrderStep['fields'][0]) => {
    switch (field.type) {
      case 'select':
        return (
          <Select
            onValueChange={(value) => handleInputChange(field.name, value)}
            value={formData[field.name]}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={`Select ${field.label}`} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case 'file':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="logo-upload"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 relative"
              >
                {logoPreview ? (
                  <div className="relative w-full h-full p-4">
                    <img
                      src={logoPreview}
                      alt="Logo preview"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Image className="w-12 h-12 mb-4 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                )}
                <input
                  id="logo-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            {logoPreview && (
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setLogoFile(null);
                  setLogoPreview('');
                }}
              >
                Remove Image
              </Button>
            )}
          </div>
        );
      default:
        return (
          <Input
            id={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.name] || ''}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            className="w-full"
          />
        );
    }
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
              {currentStep === 1 && <PackageCheck className="w-6 h-6 text-primary" />}
              {currentStep === 2 && <Cpu className="w-6 h-6 text-primary" />}
              {currentStep === 3 && <Upload className="w-6 h-6 text-primary" />}
              {currentStep === 4 && <Globe className="w-6 h-6 text-primary" />}
              {currentStep === 5 && <CreditCard className="w-6 h-6 text-primary" />}
              {orderSteps[currentStep - 1].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {orderSteps[currentStep - 1].fields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <Label htmlFor={field.name}>{field.label}</Label>
                  {renderField(field)}
                  {field.name === "codeReview" && formData[field.name] === "email" && (
                    <p className="text-sm text-muted-foreground mt-2">
                      <MailCheck className="inline-block w-4 h-4 mr-2" />
                      You'll receive code updates and review requests via email
                    </p>
                  )}
                  {field.name === "paymentMethod" && (
                    <div className="flex items-center gap-2 mt-2">
                      {formData[field.name] === "creditCard" && <CreditCard className="w-4 h-4 text-primary" />}
                      {formData[field.name] === "bankTransfer" && <Building2 className="w-4 h-4 text-primary" />}
                      {formData[field.name] === "paypal" && <DollarSign className="w-4 h-4 text-primary" />}
                    </div>
                  )}
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
                  <span>Optional AI integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Hosting and domain services available</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Social media integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Optional code review and updates via email</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Flexible payment options</span>
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
