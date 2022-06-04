---
geometry:
- top=20mm
- left=20mm
- bottom=20mm
header-includes: |
   \pagestyle{empty}
...

# Travel

## Conditions and Direction

- GM determines weather using 3d12


| 1d12  | Wind         | Precipitation  | Temperature |
| ----- | ------------ | -------------- | ----------- |
| 1-9   | None         | None           | Typical     |
| 10-11 | Light-Strong | Light-Moderate | Abnormal    |
| 12    | Gales        | White-out      | Extreme     |
:Weather

- Players determine marching order
- Leader determines direction and navigates, rolling survival when necessary

| Navigation                                                     | DC       |
| -------------------------------------------------------------- | -------- |
| Road, open sea with land in sight                              | No check |
| Grassland, coast, plains, farmland                             | 5        |
| Arctic, desert, hills, open sea with clear skies               | 10       |
| Forest, jungle, swamp, mountains, open sea with overcast skies | 15       |
| Any region with white-out precipitation                        | +3       |
:Navigation


On a failed survival check to navigate, roll 1d10. 

| d10  | Direction               |
| ---- | ----------------------- |
| 1-4  | veered into left hex    |
| 5-6  | arrived in intended hex |
| 7-10 | veered into right hex   |
:Failed Navigation (Lost)

## Determine Time Traveled

| Duration (hrs) | Hex Entered                   | 1 Travel Day (9 hr) | Distance (mi) |
| -------------- | ----------------------------- | ------------------- | ------------- |
| 3              | plains                        | 3 hexes             | 18            |
| 4.5            | hills, swamps, forests        | 2 hexes             | 12            |
| 9              | mountains                     | 1 hex               | 6             |
| 2.25           | by road / horseback on plains | 4 hexes             | 24            |
:Land Travel

| Duration (hrs) | Weather Conditions             | 1 Travel Day (9 hr) | Distances (mi) |
| -------------- | ------------------------------ | ------------------- | -------------- |
| 2.25           | Upriver                        | 4 hexes             | 24             |
| 1.5            | Downriver                      | 6 hexes             | 36             |
| 3              | Bad conditions (refer to Lost) | 3 hexes             | 18             |
| 1              | Good conditions                | 9 hexes             | 54             |
:Water Travel

## Determine Encounter

- IF this is a keyed hex with a **X** icon next to its name, roll 1d6
   - IF 4+, characters see the keyed location
   - ELSE, continue
- ELSE, roll 1d8
   - IF 8, roll on zone's encounter table [[00 Zones]] and [[Encounter Vibe Check]]

| d12 | Activity / Desire             | d10 | Complication          |
| --- | ----------------------------- | --- | --------------------- |
| 1   | Hunting / Looking for Prey    | 1   | Hungry                |
| 2   | Patrolling / Scouting         | 2   | Sick / Young          |
| 3   | Scavenging / Looting          | 3   | Lost                  |
| 4   | Hiding                        | 4   | Arrested / Trapped    |
| 5   | Resting / Sleeping            | 5   | Disgruntled           |
| 6   | Working / Task                | 6   | Broken Gear / Injured |
| 7   | Meeting / Planning / Scheming | 7   | Fleeing               |
| 8   | Ritual / Ceremony             | 8   | Insane                |
| 9   | Art / Performance             | 9   | Dead                  |
| 10  | Setting Trap                  | 10  | *Roll NPC*            |
| 11  | Celebrating                   |     |                       |
| 12  | Eating                        |     |                       |
:Encounter Vibe Check

## Stopping in a Hex

Players may break camp for the night, forage, or rest for an hour

| Foraging                                    | DC  |
| ------------------------------------------- | --- |
| Abundant food and water sources             | 10  |
| Limited food and water sources              | 15  |
| Very little, if any, water and food sources | 20  |
:Foraging



## Traveling in a Dungeon

- **Darkvision is not perfect:** Monochrome outlines of moving shapes in darkness. Dim light is **moonlight** and even modern infantry doesn't conduct operations at night. Anything for which **fine eyesight** is required will be difficult even with darkvision.
- **Time-keeping device:** Measure the amount of time they are in the dungeon. Use 1d6 where every activity is 10 minutes and every die is one hour. From 6 to 1, their torch burns out. Other taxing conditions can take effect (cold, heat, magical effects, etc)
- Each time the dice timer advances, there is a **1/6 chance an encounter is triggered**. 
- Rations, water, torches! **Torches last 1 hour**

# Flowchart for calling for a roll

- Have the players done enough to succeed without rolling?
- Is it possible? 
- Is failure plausible? 
- Does failure have consequences? 
- Are you prepared to enact those consequences? 
- Is the consequence fun? 