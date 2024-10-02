"use client";
import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import clsx from "clsx";
import { Spacer } from "../global/spacer";
import { AppContainer } from "./app-container";
import { AlignLeftIcon, SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  home_search: z.string().min(2, {
    message: "search form must be at least 2 characters.",
  }),
});

type SearchBarProps = {
  className?: string;
};
export const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      home_search: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("search form datas : ", data);
  }

  const router = useRouter()
  return (
    <div className={clsx("", className)}>
      <Spacer small />
      <AppContainer>
        <Button className="text-primary-foreground text-lg" variant={'link'} onClick={() => {
            router.back()
        }}><AlignLeftIcon className="h-6 w-6 mr-2" /> Back</Button>
        <Spacer tooSmall />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 lg:gap-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative w-full sm:w-auto sm:min-w-[26rem]"
            >
              <FormField
                control={form.control}
                name="home_search"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Search for service"
                        {...field}
                        className="h-14"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                size={"icon"}
                variant={"secondary"}
                className=" absolute right-0 top-0 h-14"
              >
                <SearchIcon className="w-6 h-6" />
              </Button>
            </form>
          </Form>
          <div>
            <Button variant={"outline"} size={'lg'} className=" h-14">Select ..</Button>
          </div>
        </div>
        <Spacer small />
        <div className="text-center">
          <Button
            variant={"link"}
            className="text-primary-foreground text-lg underline"
          >
            Clear all filters
          </Button>
        </div>
        <Spacer tooSmall />
      </AppContainer>
    </div>
  );
};
