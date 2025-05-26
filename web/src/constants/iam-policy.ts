export type IIAMPolicy = {
    name: string;
    policies: string[];
};
export const IAMPolicies = {
    dashboardPolicy: {
        name: 'Dashboard',
        policies: ['Read', 'Write', 'Delete', 'Edit'],
    },
    logViewPolicy: {
        name: 'Log View',
        policies: ['Read', 'Write', 'Delete', 'Edit'],
    },
    workflowPolicy: {
        name: 'Workflow',
        policies: ['Read', 'Write', 'Delete', 'Edit'],
    },
    alertPolicy: {
        name: 'Alert',
        policies: ['Read', 'Write', 'Delete', 'Edit'],
    },
    taskPolicy: {
        name: 'Task',
        policies: ['Read', 'Write', 'Delete', 'Edit'],
    },
};
