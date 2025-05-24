import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import SystemLogo from '@/assets/openscheduler.svg';
import { BackendServices } from '@/services/http';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { getCookie, setCookie } from '@/services/cookie';

const formSchema = z.object({
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
    const [isLoginSuccess, setIsLoginSuccess] = useState<boolean>(false);

    if (isLoginSuccess) {
        navigate('/home');
    }

    async function onSubmit(loginInfo: z.infer<typeof formSchema>) {
        try {
            const res = await BackendServices.post('/user/login', loginInfo);
            if (res.status === 200) {
                if (!getCookie('access_token')) {
                    setCookie('access_token', res.data.access_token);
                }
                setIsLoginSuccess(true);
            } else {
                console.error('Login failed:', res.data.message);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    }

    return (
        <div className="flex justify-center h-screen">
            <div className="pt-30">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="flex flex-col justify-center items-center gap-8">
                            <img src={SystemLogo} width="100rem" height="100rem"></img>
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
                                        <Input placeholder="Password" {...field} />
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
