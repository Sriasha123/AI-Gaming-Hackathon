export default function Leaderboard(){

const teams=[

{
rank:1,
name:"AI Titans",
score:98
},

{
rank:2,
name:"Cyber Warriors",
score:94
},

{
rank:3,
name:"GameX Coders",
score:90
},

{
rank:4,
name:"Neural Ninjas",
score:88
}

]

return(

<div className="bg-gray-900 p-6 rounded mt-10">

<h2 className="text-3xl mb-6">

Leaderboard 🏆

</h2>

<table className="w-full">

<thead>

<tr>

<th>Rank</th>

<th>Team</th>

<th>Score</th>

</tr>

</thead>

<tbody>

{

teams.map((team)=>(

<tr
key={team.rank}
className="border-b text-center"
>

<td className="p-4">

#{team.rank}

</td>

<td>

{team.name}

</td>

<td>

{team.score}

</td>

</tr>

))

}

</tbody>

</table>

</div>

)

}