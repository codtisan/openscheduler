export type IIAMPolicy = {
    component: string;
    policies: string[];
};

export const IAMPolicies: IIAMPolicy[] = [
    {
        component: 'Dashboard',
        policies: ['Read', 'Write', 'Delete', 'Edit'],
    },
    {
        component: 'Log View',
        policies: ['Read', 'Write', 'Delete', 'Edit'],
    },
    {
        component: 'Workflow',
        policies: ['Read', 'Write', 'Delete', 'Edit'],
    },
    {
        component: 'Alert',
        policies: ['Read', 'Write', 'Delete', 'Edit'],
    },
    {
        component: 'Task',
        policies: ['Read', 'Write', 'Delete', 'Edit'],
    },
];
