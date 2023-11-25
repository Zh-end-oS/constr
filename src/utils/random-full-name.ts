const fullName: string[] = [
"John Smith",
"Emily Johnson",
"Michael Davis",
"Sarah Brown",
"David Wilson",
"Jennifer Martinez",
"William Anderson",
"Olivia Clark",
"James Rodriguez",
"Sophia Thomas",
]

export function getRandomFullName(): string {
    const randomIndex = Math.floor(Math.random() * fullName.length)
    return fullName[randomIndex];
}