/*
* Contains Data for the Tables , Groups and Employees
* */

export const tables = [
    {
        _id: "1",
        name:'Table 1',
        chairs:[
            {
                _id:"1",
                occupied:true,
                employee:{
                    _id: "1",
                    name:"Shilpy",
                    designation: "Senior Developer",
                    team_id:'1' ,
                    current_project: 'Dell App Design'
                }

            },
            {
                _id:"2",
                occupied:false
            },
            {
                _id:"3",
                occupied:false
            },
            {
                _id:"4",
                occupied:false
            }
        ]
    },
    {
        _id: "2",
        name: "Table 2",
        chairs:[
            {
                _id:"1",
                occupied:false

            },
            {
                _id:"2",
                occupied:false
            },
            {
                _id:"3",
                occupied:false
            },
            {
                _id:"4",
                occupied:false
            }
        ]
    },
    {
        _id: "3",
        name: "Table 3",
        chairs:[
            {
                _id:"1",
                occupied:false

            },
            {
                _id:"2",
                occupied:false
            },
            {
                _id:"3",
                occupied:false
            },
            {
                _id:"4",
                occupied:false
            }
        ]
    },
    {
        _id: "4",
        name: "Table 4",
        chairs:[
            {
                _id:"1",
                occupied:false

            },
            {
                _id:"2",
                occupied:false
            },
            {
                _id:"3",
                occupied:false
            },
            {
                _id:"4",
                occupied:false
            }
        ]
    },
    {
        _id: "5",
        name: "Table 5",
        chairs:[
            {
                _id:"1",
                occupied:false

            },
            {
                _id:"2",
                occupied:false
            },
            {
                _id:"3",
                occupied:false
            },
            {
                _id:"4",
                occupied:false
            }
        ]
    },
    {
        _id: "6",
        name: "Table 6",
        chairs:[
            {
                _id:"1",
                occupied:false

            },
            {
                _id:"2",
                occupied:false
            },
            {
                _id:"3",
                occupied:false
            },
            {
                _id:"4",
                occupied:false
            }
        ]
    }
];

export const employees = [
    {
        _id: "1",
        name:"Shilpy",
        designation: "Senior Developer",
        team_id:'1' ,
        current_project: 'Dell App Design'
    },
    {
        _id: "2",
        name: "Shashank",
        designation: "Software Developer",
        team_id: '2' ,
        current_project: 'Dell Website Design'
    }
];

export const teams= [
    {
        team_id: '1',
        name: 'Team 1'
    },
    {
        team_id: '2',
        name: 'Team 2'
    },
    {
        team_id: '3',
        name: 'Team 3'
    },
    {
        team_id: "4",
        name: 'Team 4',
    },
    {
        team_id: "5",
        name: 'Team 5',
    },
    {
        team_id: "6",
        name: 'Team 6',
    },
    {
        team_id: "7",
        name: 'Team 7',
    },
    {
        team_id: "8",
        name: 'Team 8',
    },
    {
        team_id: "9",
        name: 'Team 9',
    }

];


