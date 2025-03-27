
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface RegistrationFormProps {
  formType: "donor" | "recipient";
  onSubmit: (values: any) => void;
}

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const organTypes = ["Kidney", "Liver", "Heart", "Lung", "Pancreas", "Intestine"];

const RegistrationForm = ({ formType, onSubmit }: RegistrationFormProps) => {
  // Define the form schema based on formType
  const baseFormSchema = {
    name: z.string().min(2, "Name must be at least 2 characters"),
    age: z.coerce.number().min(18, "Must be at least 18 years old").max(120),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    bloodType: z.string().refine((val) => bloodTypes.includes(val), {
      message: "Please select a valid blood type",
    }),
    organType: z.string().refine((val) => organTypes.includes(val), {
      message: "Please select a valid organ type",
    }),
  };

  // Add recipient-specific fields
  const recipientExtras = {
    urgencyLevel: z.string().refine((val) => ["Low", "Medium", "High", "Critical"].includes(val), {
      message: "Please select a valid urgency level",
    }),
    medicalHistory: z.string().min(10, "Please provide more medical history details"),
  };

  // Add donor-specific fields
  const donorExtras = {
    isLivingDonor: z.boolean(),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and conditions",
    }),
  };

  const formSchema = formType === "donor" 
    ? z.object({ ...baseFormSchema, ...donorExtras })
    : z.object({ ...baseFormSchema, ...recipientExtras });

  // Create the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: undefined,
      email: "",
      phone: "",
      ...(formType === "donor" ? { isLivingDonor: false, agreeToTerms: false } : {}),
    },
  });

  // Handle form submission
  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form values:", values);
    
    // Simulate blockchain submission
    toast.promise(
      new Promise((resolve) => {
        // Simulate network delay
        setTimeout(() => {
          resolve(values);
        }, 2000);
      }),
      {
        loading: "Submitting to blockchain...",
        success: `Successfully registered as ${formType}!`,
        error: "Registration failed. Please try again.",
      }
    );
    
    onSubmit(values);
  };

  return (
    <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-teal-700 mb-6">
        {formType === "donor" ? "Donor Registration" : "Recipient Registration"}
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" className="input-field" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      placeholder="30" 
                      className="input-field" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" className="input-field" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 234 567 8900" className="input-field" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="bloodType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blood Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="input-field">
                        <SelectValue placeholder="Select blood type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {bloodTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="organType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organ Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="input-field">
                        <SelectValue placeholder="Select organ type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {organTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          {/* Recipient-specific fields */}
          {formType === "recipient" && (
            <>
              <FormField
                control={form.control}
                name="urgencyLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Urgency Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="input-field">
                          <SelectValue placeholder="Select urgency level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {["Low", "Medium", "High", "Critical"].map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="medicalHistory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Medical History</FormLabel>
                    <FormControl>
                      <Input
                        className="input-field"
                        placeholder="Provide relevant medical history"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          
          {/* Donor-specific fields */}
          {formType === "donor" && (
            <>
              <FormField
                control={form.control}
                name="isLivingDonor"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-3 space-y-0 pt-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>I am registering as a living donor</FormLabel>
                      <FormDescription>
                        Check this if you plan to donate while living (e.g., kidney, partial liver)
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="agreeToTerms"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>I agree to the terms and conditions</FormLabel>
                      <FormDescription>
                        By checking this, you acknowledge that you have read and agree to our donation terms
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          
          <Button type="submit" className="btn-primary w-full">
            Register as {formType === "donor" ? "Donor" : "Recipient"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RegistrationForm;
