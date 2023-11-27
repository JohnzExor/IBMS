import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFirebaseServices } from "@/store/useFirebase";
import { authSchema } from "@/lib/types";
import { useState } from "react";
import img from "@/assets/images/loginPage.svg";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  const { userLogIn } = useFirebaseServices();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof authSchema>) => {
    setIsLoading(true);
    await userLogIn(value.email, value.password);
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 w-full flex flex-col items-center justify-center md:flex-row md:gap-10"
      >
        <img src={img} className=" w-72 md:w-1/3" />
        <div className="space-y-3 flex flex-col items-center">
          <h1 className="font-bold text-xl">Login</h1>
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
                    className="bg-gray-100 w-72 py-6 rounded-xl dark:bg-opacity-50"
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
            {isLoading ? "Loading" : "Login"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
