import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import SystemLogo from '@/assets/openscheduler.svg';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { UseLoginSubmit } from '@/hooks/use-login';
import { ColourfulText } from '@/components/ui/colourful-text';

export const formSchema = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters.' })
        .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter.' })
        .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter.' })
        .regex(/[0-9]/, { message: 'Password must contain at least one number.' })
        .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'Password must contain at least one special character.' }),
});

function LoginForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    });
    const navigate = useNavigate();

    async function handleLoginSubmit(loginInfo: z.infer<typeof formSchema>) {
        const res = await UseLoginSubmit(loginInfo);
        if (res) {
            navigate('/home');
        }
    }

    return (
        <div className="flex justify-center h-screen">
            <div className="pt-30">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleLoginSubmit)} className="space-y-8">
                        <div className="flex flex-col justify-center items-center gap-8">
                            <div className="flex flex-row items-center">
                                <img src={SystemLogo} width="100rem" height="100rem"></img>
                                <h1 className="text-3xl">
                                    <ColourfulText text="Open Scheduler" />
                                </h1>
                            </div>
                            <FormLabel className="text-3xl">Login</FormLabel>
                        </div>
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>User Email *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="password"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>User Password *</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="w-80" type="submit">
                            Submit
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}

export default LoginForm;
