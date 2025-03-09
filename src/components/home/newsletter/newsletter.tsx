'use client';

// Component Imports
import { Card, CardContent } from '@/components/shared/ui/building-blocks/card';

// Utils Imports
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// Asset and Constant Imports
import { Mailbox } from 'lucide-react';
import { NEWSLETTER } from './constants/newsletter.constant';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/shared/ui/building-blocks/form';
import { Button } from '@/components/shared/ui/building-blocks/button';
import { Input } from '@/components/shared/ui/building-blocks/input';

// Component: Newsletter
// Description: This component is for the user to subscribe to our newsletter.
export const Newsletter = () => {
  // Form
  const formSchema = z.object({
    email: z
      .string({
        required_error: 'Email is required'
      })
      .email({ message: 'Invalid email address!' })
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ''
    }
  });

  // On Submit Function
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className='overflow-hidden drop-shadow-2xl'>
      <CardContent className='p-0'>
        <div className='relative isolate overflow-hidden bg-background px-4 py-8 md:p-8 lg:py-14'>
          {/* Content */}

          {/* Title */}
          <h2 className='font-heading text-3xl font-bold tracking-tight x-sm:text-4xl'>
            {NEWSLETTER.title}
          </h2>

          <div className='mt-6 flex flex-col gap-6 lg:mt-8 lg:flex-row lg:gap-16'>
            {/* Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-4'
              >
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          className={`w-60 3x-sm:w-80 ${fieldState.error ? 'border-destructive' : ''}`}
                          placeholder='Email'
                          autoComplete='email'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type='submit' variant='outline'>
                  Submit
                </Button>
              </form>
            </Form>

            {/* Description */}
            <div className='flex flex-col'>
              <div className='flex flex-row items-center'>
                <div className='mr-5 rounded-md bg-white/5 p-2 ring-1 ring-white/10'>
                  <Mailbox />
                </div>
                <dt className='font-heading text-lg font-semibold xl:text-2xl'>
                  {NEWSLETTER.feature}
                </dt>
              </div>
              <dd className='mt-2 text-sm leading-7 text-gray-400 2x-sm:text-base xl:text-lg'>
                {NEWSLETTER.description}
              </dd>
            </div>
          </div>

          {/* Background */}
          <div
            className='absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6'
            aria-hidden='true'
          >
            <div
              className='aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-brand-primaryAccent to-brand-primary opacity-25'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Newsletter;
