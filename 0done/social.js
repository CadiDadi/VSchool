
var soccerPlayer = {
    firstName: 'Scott ',
    lastName: 'Ashcroft',
    //method
    fullName : function myFullName() {
        console.log(firstName+lastName)
    },
    age: 44, 
    teamNumber: 7,
    positionsPlayed: ['forward', 'striker', 'center mid'],
    teamMembers: [
        {
            name: 'Neil',
            age: 33,
            teamNumber: 10,
            positionsPlayed: ['defender', 'goalie'],
            yearsPlayed: [ 
                {
                    years: [2010, 2011, 2012],
                    accolades: ['team leader']                                        
                }
    ]

        },
        {
            name: 'Reed',
            age: 28,
            teamNumber: 10,
            positionsPlayed: ['center right', 'left wing'],
            memberInfo: [
                {
                years: [2010, 2011, 2012],
                accolades: ['best player']
                }
            ]

        },
        {
            name: 'Brian',
            age: 24,
            teamNumber: 17,
            positionsPlayed: ['center mid', 'center defender'],
            memberInfo: [
                {
                years: [2005, 2006, 2012],
                accolades: ['team player']
                                        
                }
            ]

        }
    ]
}
console.log(soccerPlayer.teamMembers)