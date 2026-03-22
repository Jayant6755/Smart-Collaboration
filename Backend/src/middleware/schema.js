export const UserSchema={
    body:{
        type:"object",
        required:["fullName","email","password"],
        properties:{
            fullName:{type:'string',minLength:2,maxLength:30},
            password:{type:'string',minLength:8},
            email:{type:'string',format:'email'}
        }
    }
}

export const loginSchema={
  body:{
    type:"object",
    required:["email","password"],
    properties:{
     email:{type:'string',format:'email'},
       password:{type:'string',minLength:8}
  }
}}

export const TaskSchema = {
  body: {
    type: 'object',
    // These must exist in the request
    required: [
      'title', 
      'description', 
      'projectId', 
      'assignedTo', 
      'status', 
      'priority', 
      'dueDate'
    ],
    properties: {
      title: { 
        type: 'string', 
        minLength: 3, 
        maxLength: 100 
      },
      description: { 
        type: 'string', 
        maxLength: 500 
      },
      projectId: { 
        type: 'string' 
      },
      assignedTo: { 
        type: 'string' 
      },
      status: { 
        type: 'string', 
        
        enum: ['To Do', 'In Progress', 'Review', 'Completed'] 
      },
      priority: { 
        type: 'string', 
        enum: ['Low', 'Medium', 'High'] 
      },
      dueDate: { 
        type: 'string', 
        format: 'date-time'
      }
    }
  }
};

export const ProjectSchema = {
  body: {
    type: 'object',
    // These 3 are the bare minimum to create a project
    required: ['pName', 'description', 'createdBy'], 
    properties: {
      pName: { 
        type: 'string', 
        minLength: 3, 
        maxLength: 50 
      },
      description: { 
        type: 'string', 
        minLength:0,
        maxLength: 200 
      },
      createdBy: { 
        type: 'string' 
      },
    }
  }
};

export const pMembersSchema = {
  body: {
    type: 'object',
    required: ['projectId', 'memberId', 'role'], 
    properties: {
      projectId: { 
        type: 'string',
        description: 'The ID of the project receiving a new member'
      },
      userId: { 
        type: 'string',
        description: 'The ID of the user being added'
      },
      role: { 
        type: 'string',
        enum: ['admin', 'member'],
        default: 'Member'
      },
      addedBy: {
        type: 'string',
        description: 'The ID of the person who invited them'
      }
    }
  }
};

