export type Policy = {
    name: string;
    policies: string[];
};

interface IAMPolicies {
    dashboardPolicy: Policy;
    logViewPolicy: Policy;
    workflowPolicy: Policy;
    alertPolicy: Policy;
    taskPolicy: Policy;
}

export const IAMPolicies: IAMPolicies = {
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
