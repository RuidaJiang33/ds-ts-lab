import {Friend, Colleague } from './myTypes'
import { friends, colleagues } from './01-basics'

function older(f: Friend) : string {
  f.age += 1
  return `${f.name} is now ${f.age}` 
}
console.log(older(friends[0]))

function allOlder(friends: Friend[]): string[] {
  return friends.map((friend) => older(friend));
}
console.log(allOlder(friends));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

function addColleague(cs : Colleague[], name : string, department : string, email : string){
  const extension : number = highestExtension(cs).contact.extension;
  const newColleague : Colleague = {
    name: name,
    department: department,
    contact: {
      email: email,
      extension: extension + 1
    }
  }
  cs.push(newColleague);
  return cs;
}
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));