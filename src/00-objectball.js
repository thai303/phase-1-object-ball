teamName1 = 'Brooklyn Nets'
colors1 = ['Black', 'White']
players1 = ['Alan Anderson' , 'Reggie Evans' , 'Brook Lopez' , 'Mason Plumlee' , 'Jason Terry']
numbers1 = [0 , 30 , 11 , 1 , 31]
shoe1 = [16 , 14 , 17 , 19 , 15]
points1 = [22 , 12 , 17 , 26 , 19]
rebounds1 = [12 , 12 , 19 , 12 , 2]
assists1 = [12 , 12 , 10 , 6 , 2]
steals1 = [3 , 12 , 3 , 3 , 4]
blocks1 = [1 , 12 , 1 , 8 , 11]
slamDunks1 = [1 , 7 , 15 , 5 , 1]
stats1 = [numbers1 , shoe1 , points1 , rebounds1 , assists1 , steals1 , blocks1 , slamDunks1]

teamName2 = 'Charlotte Hornets'
colors2 = ['Turquoise' , 'Purple']
players2 = ['Jeff Adrien' , 'Bismak Biyombo' , 'DeSagna Diop' , 'Ben Gordon' , 'Brendan Haywood']
numbers2	= [4 , 0 , 2 , 8 , 33]
shoe2 = [18 , 16 , 14 , 15 , 15]
points2 = [10 , 12 , 24 , 33 , 6]
rebounds2 = [1 , 4 , 12 , 3 , 12]
assists2 = [1 , 7 , 12 , 2 , 12]
steals2 = [2 , 7 , 4 , 1 , 22]
blocks2 = [7 , 15 , 5 , 1 , 5]
slamDunks2 = [2 , 10 , 5 , 0 , 12]
stats2 = [numbers2 , shoe2 , points2 , rebounds2 , assists2 , steals2 , blocks2 , slamDunks2]

stats = ['numbers' , 'shoe' , 'points' , 'rebounds' , 'assists' , 'steals' , 'blocks' , 'slamDunks']

let team1 = {
    teamName: teamName1,
    colors: colors1,
    players: {} 

}
players1.forEach((element, index) => {
    team1.players[players1[index]] = {}    
});

shoe1.forEach((element, index) => {
    team1.players[players1[index]].shoe = element 
})

numbers1.forEach((element, index) => {
    team1.players[players1[index]].number = element 
})

points1.forEach((element, index) => {
    team1.players[players1[index]].points = element 
})

rebounds1.forEach((element, index) => {
    team1.players[players1[index]].rebounds = element 
})

steals1.forEach((element, index) => {
    team1.players[players1[index]].steals = element 
})

blocks1.forEach((element, index) => {
    team1.players[players1[index]].blocks = element 
})

slamDunks1.forEach((element, index) => {
    team1.players[players1[index]].slamDunks = element 
})

assists1.forEach((element, index) => {
    team1.players[players1[index]].assists = element 
})

console.log(team1)

let team2 = {
    teamName: teamName2,
    colors: colors2,
    players: {} 

}
players2.forEach((element, index) => {
    team2.players[players2[index]] = {}    
});

shoe2.forEach((element, index) => {
    team2.players[players2[index]].shoe = element 
})

numbers2.forEach((element, index) => {
    team2.players[players2[index]].number = element 
})

points2.forEach((element, index) => {
    team2.players[players2[index]].points = element 
})

rebounds2.forEach((element, index) => {
    team2.players[players2[index]].rebounds = element 
})

steals2.forEach((element, index) => {
    team2.players[players2[index]].steals = element 
})

blocks2.forEach((element, index) => {
    team2.players[players2[index]].blocks = element 
})

slamDunks2.forEach((element, index) => {
    team2.players[players2[index]].slamDunks = element 
})

assists2.forEach((element, index) => {
    team2.players[players2[index]].assists = element 
})

console.log(team2)