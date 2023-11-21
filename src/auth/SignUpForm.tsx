import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFirebaseServices } from "@/store/useFirebase";
import { authSchema } from "@/lib/types";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import img from "@/assets/images/signupPage.svg";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const SignUpForm = () => {
  const { userSignUp } = useFirebaseServices();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof authSchema>) => {
    setIsLoading(true);

    if (value.password === value.confirmPassword) {
      await userSignUp(value.email, value.password);
    } else {
      toast({
        description: "Password dont match!",
      });
    }
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 w-full flex flex-col md:flex-row items-center justify-center md:gap-10"
      >
        <img src={img} className=" w-72 md:w-1/3" />
        <div className="space-y-3 flex flex-col items-center">
          <h1 className="font-bold text-xl">Sign Up</h1>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Corporate Email"
                    {...field}
                    className=" bg-gray-100 w-72 py-6 rounded-xl dark:bg-opacity-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                    className=" bg-gray-100 py-6 rounded-xl w-72 dark:bg-opacity-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    {...field}
                    className=" bg-gray-100 py-6 rounded-xl w-72 dark:bg-opacity-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isLoading}
            className=" font-semibold  bg-nextColor dark:bg-opacity-50 rounded-xl h-12 w-32 shadow-xl text-white"
          >
            {isLoading ? "Loading" : "Create Account"}
          </Button>
          <p className="text-sm mt-6">
            Already have an Account?{" "}
            <Link to={"/auth/login"} className=" text-blue-500 underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
