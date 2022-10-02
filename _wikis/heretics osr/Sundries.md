
# Items

## Reading an item line
Items are described with additional tags. 

*n*/*x*: This means there are n number of items out of a potential total x that can fit in a single inventory slot. For example, "torch 1/2" means there is one torch in this slot out of a potential 2 total. "arrows 20/20" means there are 20 arrows out of a potential total 20 in a single slot. 

*x*d*n*: This indicates the amount of dice to be rolled for an effect and which type. For example, "cudgel 1d4" is a cudgel that inflicts 1d4 damage. 

ad+*n*: This indicates a bonus to armored defense stat. 

ad=*n*: This indicates a replacement of the armored defense stat.

body, head, *n*h, feet: This indicates where an item is worn when equipped. *n*h indicates how many hands are in a character's hands. An item with 1h is carried in 1 hand, 2h in 2 hands.

md+*n*: This indicates a bonus to magicked defense stat.

*n* slots: This indicates that an object takes up multiple slots.

*reach, concealable, versatile, subtle, thrown*, etc: These are additional modifiers to weapons with special effects. 

*x*/*n*r: This indicates the range for an item in feet. The first number is the distance up to which an item can be thrown or fired, beyond which the item is thrown at disadvantage. The second number is as far as the item can be thrown or fired. Items with the thrown tag need this range number as well. 

at: This indicates that an item must be attuned to, which impacts the magical item limitation. All wards and magic items require attunement while items containing spells do not, unless otherwise specified.

## Inventory and Load
Inventory is a core feature of this game. Characters may carry up to their maximum load (equal to their strength defense).

Keeping track of it is important. Unless stated otherwise, every item takes up one slot. Smaller items can be grouped in bundles and treated as one slot. For example, "chalk, 20/20" means a bundle of 20 pieces of chalk taking up one slot. A slot can be assumed to weigh between 1 to 5 pounds or 1 to 2 kilos. It may also contain a magical item. 1-500 coins takes up one slot.

Unless they are magical, clothing, footwear, jewelry, backpacks, and sacks do not take up slots (though armor does).

### Encumbrance 
A character may choose to carry up to 5 items over their **maximum load** and be encumbered. An encumbered character takes a 5 foot movement penalty in combat and exploration for every slot over their limit and makes all rolls at disadvantage. 


## Supply
Supply is a nebulous item representing a quantity of consumable resources. It can be used to replace consumable resources and it is notated as "sup 5/5", taking up a single item slot. 1 supply can be purchased for 1 coin. 

You can only replace items you already have. It is not quantum gear.

You may only carry a number of supply equal to your intelligence defense. 

You may forage for supply once per day. 

## Food and Rations
Food is counted in rations. Rations acts as a unit, representing one full day's worth of meals. Rations should be counted as consumed during a long rest at the end of the day. 

Rations take up half a slot and are notated as "rations 2/2". Food should have this appended to the foodstuffs as a tag. For example, "shish kababs (rations 2/2)". 

## Currency
Coins are the currency. These can be named something else in the game: coppers, pence, pennies, rubles, dinari, yen, soles, crowns, groats, marks, ducats, etc.

1-500 coins take up one slot. 

### Costs
Note that unless stated otherwise, most common gear can be assumed to cost 1d10 coins (5).

## Armor
Armor augments armored defense. ad+n means that the armor augments the armored defense stat while ad=n means that the armored defense is set equal to that number without the dexterity bonus. 

Note that full plate and half plate assume that mail and gambesons may be part of the armored outfit. The armors denoted with *body* cannot be worn at the same time. This means that shields and helmets may augment ad=*n* suits of armor. A character wearing a shield, helmet, and full plate, for example, would have an armored defense of 18.

| armor                          | bonus | slots | placement   | cost  |
| ------------------------------ | ----- | ----- | ----------- | ----- |
| shield                         | +1    | 1     | 1h (1 hand) | 40    |
| helmet                         | +1    | 1     | head        | 40    |
| gambeson, padding, cloth armor | +1    | 1     | body        | 60    |
| brigandine, lamellar           | +2    | 2     | body        | 500   |
| mail                           | +3    | 3     | body        | 1,200 |
| half plate                     | =15   | 4     | body        | 4,000 |
| full plate                     | =16   | 5     | body        | 8,000      |

### Sundering Shields
When a character is hit and they carry a shield, they may choose to destroy the shield in order to avoid all damage.

## Weapons

### Melee Weapons
| weapon                             | dmg  | slots | hands    | cost | special                           |
| ---------------------------------- | ---- | ----- | -------- | ---- | --------------------------------- |
| unarmed strike                     | =str | 0     | n/a      | n/a  |                                   |
| cudgel                             | 1d4  | 1     | 1h       | 5    |                                   |
| staff                              | 1d4  | 1     | 1h       | 5    | reach                             |
| dagger                             | 1d6  | 1     | 1h       | 50   | concealable, subtle               |
| flail, hand axe, mace, short sword | 1d6  | 2     | 1h or 2h | 50   | versatile                         |
| spear                              | 1d6  | 2     | 1h or 2h | 50   | versatile, thrown (20/60r), reach |
| battle axe, war hammer, long sword | 1d8  | 2     | 2h       | 100  |                                   |
| halberd, pole axe                  | 1d8  | 3     | 2h       | 100  | reach                             |

- *Concealable*: Can be hidden on the body when searched
- *Subtle:* If an attack is done secretly, this inflicts 3 x weapon die damage. 
- *Versatile:* If this weapon is used with 2 hands, roll 2 weapon die and take the higher result. 
- *Thrown:* This weapon can be thrown at the stated range. Otherwise weapons are thrown at 10/20 range.
- *Reach*: This weapon has a 10 foot reach. 

#### Sundering Melee Attacks
On a hit, a character may choose to destroy their weapon to inflict double dice damage.

### Missile Weapons
| weapon               | range     | loading | dmg | slots | hands | cost |
| -------------------- | --------- | ------- | --- | ----- | ----- | ---- |
| sling                | 60/240r   |         | 1d6 | 1     | 1     | 5    |
| bow                  | 150/600r  |         | 1d6 | 2     | 2     | 50   |
| crossbow             | 300/1200r | 1 round | 1d8 | 2     | 2     | 500  |
| 20/20 arrows / bolts |           |         |     | 1     |       | 50   |

## Medicine and Other Substances 
Herbs and fungi can be foraged and combined into substances. Refer to **Foraging**.

Monster parts may also be used to craft items, in coordination with the referee and may require appropriate checks. Intelligence check against a DC equal to 10 + monster HD may be appropriate. 

### Crafting 
The following table has substances along with their application, effects, and recipes. Solvents can include oils, water, honey. Creating herbal remedies or substances takes 10 minutes. All substances are 5 to a slot. For example, "Poultice 5/5". Substances are created one for one.

For creatures afflicted by diseases, combinations of medicines below may be used to treat diseases, where sensible.

| Substance           | Usage                                                                | Effects                                                                                                                                                                 | Recipe                                                                 |
| ------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Poultice            | 1 minute, applied to wounds                                          | Heal 1d8 of grit, stabilize dying creature                                                                                                                              | 2 of any of the following: Lionspaw, feverfew, sarnis hip; any solvent |
| Deadsalt            | 1 action, dashed at enemies or sprinkled in a solid circle (3 slots) | Dash: Turns HD of undead equal to WIL bonus. Protective Circle: Prevents magic effects or magical creatures (undead, fey, fiends, and celestials) from crossing through | Salt, ground flint moss                                                |
| Darksight salve     | 1 action, applied to eyes                                            | Enables darkvision for 1 hour                                                                                                                                           | Sightleaf, solvent                                                     |
| Courage tea         | 1 action, drunk                                                      | Restores grit equal to the brewer's INT bonus (as long as flesh is above 0), removes effects of fear                                                                    | Sarnis hip, hot water (brewed)                                         |
| Antitoxin           | 1 action, drunk                                                      | Causes drinker to expel toxin from body quickly, taking 1 point of direct damage (3 for NPCs)                                                                           | Honeyfoil, sarnis hip, hot water (brewed)                              |
| Mossbomb            | 1 action, lit and tossed (up to 60 feet)                             | Explosion inflicting 2d6 bludgeoning damage and starting a fire in a 10 foot radius                                                                                     | Flint moss, guano, container, fuse                                     |
| Wary tea            | 1 action, drunk                                                      | Sense the presence of undead, fiends, celestials, and fey within a 60 foot radius for 10 minutes                                                                        | Sightleaf, warynettle, hot water (brewed)                              |
| Wary nettle, smoked | 1 action, smoked                                                     | Exhale smoke in 10 foot line to put INT bonus worth of HD creatures to sleep for 2 rounds. Inhale, induces sleep.                                                       | Warynettle                                                             |
| Focus smoke         | 1 action, smoked                                                     | Inhale smoke to gain +1 to ranged attacks for 6 rounds (1 minute)                                                                                                       | Sightleaf (ground), devilsgrace (secretion), starcomb                  |
| Restoring poultice  | 10 minutes, applied to wounds or eaten                               | Restores abilities reduced by injuries                                                                                                                                  | Heartsbane (powdered), lionspaw, feverfew, any solvent                 |
| Consecrating powder | 1 action, sprinkled in a circle or over a threshold                  | Consecrates a space bound by the circle (5 slots) or walls and thresholds (1 slot per threshold); undead suffer -1 to all rolls                                         | Heartsbane (powdered), salt, warynettle (powdered)                     |
| Anti-magic smoke    | 1 action, burned in censor or pit                                    | Suppresses magic in a 10 radius cube for 3 combat rounds (30 seconds)                                                                                                   | Heartsbane (powdered), warynettle                                      |
| Devils sleep        | 1 action, drunk                                                      | Disadvantage on all rolls for 30 seconds (3 combat rounds), roll strength save versus brewer's intelligence defense or suffer 3d6 direct damage (9d6 for NPCs)          | Devilsgrace, warynettle, hot water (brewed)                            |
| Heartsbane powder   | 1 action, eaten or drunk                                             | Inflicts 2d6 direct damage (6d6 for NPCs), coagulates blood, kills creature after INT bonus hours                                                                       | Heartsbane (powdered), devilsgrace (secretion)                         |


## Magical Items

### Attunement

Characters may carry any number of magical items but may only be attuned to a number of magical items equal to their willpower bonus. Attuning takes 1 hour and must be done during a period of rest. 

Magical items that have ongoing effects require attunement, while most spells (represented by items like spellbooks, tablets, idols, scrolls, runestones etc) do not. 

Wards also fall under this category and must be attuned to. Wards may be fetishes, bracelets, necklaces, rings, or other such items that provide a bonus to a character's magical defense stat. 

### Spells
Spells are cast from items, thereby removing the need for tracking separate spell slots. Spells take up item slots and must be used with two hands when cast. Spells do not typically require attunement.

### Wards
Wards augment magicked defense. Starting wards are very simple, likely made by the character, local religious figures, wise folks, or stumbled upon. 

Characters may not start with stronger wards than md+1.

- fetish md+1 at, 10 coins
- chain md+1 at, 20 coins
- charm md+1 at, 10 coins
- scapular md+1 at, 5 coins

More powerful examples of wards follow 

- Snake familiar md+2 at (2 slots)
- Enchanted glass eye (worn) md+3 at 

Wards may be shattered to prevent all damage from a spell attack or to prevent the effects of a spell. The ward cannot be repaired. 

# Hirelings
Player characters may hire any number of hirelings they can afford. 

All morale checks for hirelings use the employer's +wil bonus. 

**Settlement size modifiers** are used to determine the availability of a type of hireling. 

- Village: 1
- Town: 2
- City: 10
- Metropolis: 100

This value is re-rolled whenever a party returns to the settlement anew. This may result in more or fewer hirelings available. 

## Helpers
L0. HP 1. MV 120 (40). 

**Role**: Hauling treasure and equipment, bearing torches. 

**Avoids**: Taking part in anything dangerous, like fighting monsters and detecting traps. 

**Breaking points:** Any sign of danger whatsoever. 

**Wages**: 10 coins / day

**Availability:** 1d10 x settlement size

## Experts
L1. HP 2d4. INT 2. MV 120 (40).

**Role:** Provide services within their area of expertise. 

**Breaking points**: Danger beyond what was originally expected of them. Half HP. Half of allies out.

**Wages:** 20-100 coins / day

**Availability:** Varies on settlement size and rarity of expert. 

## Mercenaries
**Warrior.** L1. HP 2d4. AD 14 (helmet, shield, mail). MD 10. STR 2. MV 120 (40). Att 1 x 1d6 (short sword).

**Archer.** L1. HP 2d4. AD 13 (helmet, mail). MD 10. STR 2. MV 120 (40). Att 1 x 1d6 (bow).

**Role**: Protect employer from harm in the wilderness. 

**Breaking points:** Will not enter dungeons, expertise is limited to battlefield and one on one combat. Half HP. Half of allies out.

**Wages**: 20 coins / day

**Availability**: 1d8 x settlement size

## Retainers
**Sample stat line:** L1. HP 3(6). AD 13 (shield, helmet). MD 10. STR 1 DEX 1, INT 1, WIL 0. MV 120 (40). Att 1 x 1d6 (short sword) or 1 x spell. Items: Firebolt (spellbook).

A retainer's stats should be rolled ahead of time just like level 1 player character and populate the world. 

**Avoids:** Retainers will only follow player characters of a higher level than they are. Therefore level 1 characters cannot hire retainers. 

You can command retainers of HD up to your wil bonus. 

**Role:** Everything a player character does. 

**Wages:** Retainers earn a half share of experience and treasure and can gain levels over time.

**Breaking points:** Half HP. Half of allies out.

**Availability:** Retainers can be found in any settlement. 

### Retainer Maneuvers
Rather than take an action, a character may instead issue a command for their retainers to follow a specific order as a unit. Otherwise, retainers will fight to survive. 

To issue a command, a commander must make a +wil roll against a DC equal to the total HD of monsters in a combat (rounded up) or 10, whichever is higher.

On a failure the retainers will continue to fight to survive, but on a success, a character may order the retainers to perform specific coordinated tactics. This could include

- Charging
- Kiting
- Focus fire
- Cutting off escape
- Retreat
- Perform a stunt (like grabbing an item or passing characters items)
- Forming a shield wall

# Magic
*Casting spells is dangerous.* 

Spells must be cast holding the spell item in two hands. When casting a spell, roll a number of **mana dice** up to your +int bonus and, where applicable, a +int attack roll. 

## Spell Tags
- **Line of sight.** Unless otherwise specified by the spell, the spell requires line of sight on the target
- **Duration.** Spells with ongoing effects will be denoted as such. This is also where concentration will be denoted. 
- **Range.** Range of spells, as a distance.
- **Targets.** The target of the spell. 
- **\[dice\]** means the number of mana dice rolled. 
- **\[sum\]** means the sum of the mana dice rolled. 
- **Attack.** This refers to whether a spell requires a spell attack. This requires a d20+int attack against the target's magicked defense.
- **Save.** This refers to whether a spell requires a save from the target and specifies the ability. For +wil saves, the target uses their magicked defense bonus instead. The DC is always equal to the caster's intelligence bonus. 

Some spells require concentration to maintain. If a spellcaster is attacked or performs an action other than maintaining concentration on the spell, the spell's effect ends. 

## Mana Dice
Mana dice are a pool of d6 equal to your +int bonus, minimum 0. Count the number of mana dice rolled and sum the total as well. Spells' features may depend on the number of dice rolled and the sum, or both, or neither. 

Mana dice are rolled in conjunction with spell attack dice, when applicable. Roll them all at once because even if the attack fails or only inflicts half damage or a weakened effect on the target, the results will still have a material impact. 

### Expending and Recovering Mana Dice
On a 1-3, the mana die returns to your pool. On a 4-6, the caster must have a long rest. The mana die returns at dawn. 

#### Wards as Mana Dice
Wards can also be used to contribute mana dice (1 for 1) and are destroyed on a roll of 4-6 and cannot be recovered. The ward is unaffected on a 1-3. 

### Mishaps and Dooms
If the caster rolls **doubles** on their dice, a magical mishap occurs with the spell. 

If the caster rolls **triples** on their dice, they receive 1 doom. 

Mishaps may be avoided by destroying a **ward.** Dooms may be avoided by destroyed **three wards**. 

| d6  | mishap                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------- |
| 1   | Mana dice only return to your pool on a 1-2 until the next dawn                                            |
| 2   | Suffer 1d6 psychic damage                                                                                  |
| 3   | Random mutation for 1d6 rounds. Roll a +wil save against your own int defense or the mutation is permanent |
| 4   | Blind, deafened, stunned, or in agony for 1d6 rounds                                                                                       |
| 5   | Ravenous hunger: Cannot cast spells or attack until you eat 1 ration                                                                                  |
| 6   | Spell targets you (if harmful) or enemy (if beneficial) or fizzles (if neutral)                           |

Count dooms as they accumulate.

|     | dooms                                                                                       |
| --- | ------------------------------------------------------------------------------------------- |
| 1st | Drop to 0 grit.                                                                             |
| 2nd | Lose the ability to cast spells for 3 days.                                                 | 
| 3rd | The spell escapes the artifact and you are trapped in the artifact now. You become a spell. |

### Coven Casting
With a magical ritual and symbols (like string tied around fingers, rings, tattoos, etc), characters may be bound together and **share** mana dice in a pool. 

## Wild Magic
When casting magic, never be your main battery, but if you must: 

You may use mana dice as a way to tap into the wild magic of the world. Describe an effect and choose a target, and the referee should adjudicate the results, which will be hazardous and may not work as expected, and mishaps and dooms will still apply as well. 

## Spells 

### Artifacts, Spellbooks, Relics, Tablets, and More
- the skull of a man executed for a crime he did not commit
- the eyes of a child drowned by their parent
- the tail of a snake for the tongue
- cache of coins
- blasphemous idol 
- black chalice 
- bracelet of teeth 
- brooch 
- bloody coins 
- devil mask 
- obsidian rod 
- ritual dagger 
- void black ring heavier than it should be 
- crystal ball 
- mirror that cracks and reseals when someone looks into it who is close to death 
- gemstones 
- mummified head of a prophet 
- spiral crown 
- spiked crown 
- magical eye (but you have to replace your eye with it)
- tongue of the false prophet

### Spell List


|                          |                   |                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------ | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                          | Fireball          | Shoot a fireball in a 10 x \[dice\] foot radius sphere, inflicting 2 x \[sum\] fire damage                                                                                                                                                                                                                                                                                              |
|                          | Lightning Bolt    | Shoot a bolt of lightning, striking \[dice\] targets in a chain, inflicting 2 x \[sum\] lightning                                                                                                                                                                                                                                                                                       |
|                          | Cone of Cold      | Spray a cone of frost in a cone 10 x \[dice\] feet long, inflicting 2 x \[sum\] cold                                                                                                                                                                                                                                                                                                    |
|                          | Binding Chains    | Summon \[dice\] chains to force an equal number of creatures to make a WIL save or be bound. Concentration.                                                                                                                                                                                                                                                                             |
|                          | Create Light      | Touch an item to shed bright light in a 10 x \[dice\] foot radius sphere. May also be directed at an enemy within melee range to blind them for \[dice\] rounds.                                                                                                                                                                                                                        |
|                          | Bubble of Silence | Create an invisible dome of air that silences all sound within a 10 x \[dice\] foot radius sphere.                                                                                                                                                                                                                                                                                      |
|                          | Shield of Gales   | Create swirling winds within a 10 x \[dice\] radius sphere centered on the caster. No missiles may pass in or out of this barrier.                                                                                                                                                                                                                                                      |
|                          | Death Touch       | Touch one creature and spend 3 mana dice. The caster must maintain concentration and line of sight for three turns on the target. On the third turn, the target dies. On a mishap, the target rises as a revenant set on killing the caster.                                                                                                                                            |
|                          | Raise Dead        | Touch a number of dead creatures equal to spent mana dice. These undead follow the caster's commands for \[sum\] hours. HD 1d8. AD 10. MD 10. STR 3. INT -1. MV 90 (30). Atk x 1 (claws, teeth) 1d6.                                                                                                                                                                                    |
|                          | Transfer Life     | Touch one creature and heal \[sum\] flesh at the cost of half your flesh rounded up.                                                                                                                                                                                                                                                                                                    |
|                          | Soul Transfer     | Spend 5 mana dice. The caster's soul is stored in the vessel used to cast this spell while the body remains inert. The soul may possess anybody that touches the vessel if they fail on a +wil save. If the possessed body is slain, the soul must make a +wil save against int defense to return to the vessel. The caster may cast this spell again to return to their original body. |
|                          | Bewitch           | Bewitch \[sum\] HD worth of creatures. Hostile creatures become neutral, neutral creatures friendly, and friendly creatures infatuated. Concentration up to \[dice\] x 10 minutes.                                                                                                                                                                                                      |
|                          | Scry              | Entering a catatonic state and holding a possession of the target, the caster enters the mind of another creature and senses everything they sense for \[dice\] x 10 minutes. Concentration.                                                                                                                                                                                            |
|                          | Inflict Fear      |                                                                                                                                                                                                                                                                                                                                                                                         |
|                          | Sleep             |                                                                                                                                                                                                                                                                                                                                                                                         |
|                          | Truthful Gaze     | (circle of truth)                                                                                                                                                                                                                                                                                                                                                                       |
| A pair of matching rings | Send Message      | whispered message                                                                                                                                                                                                                                                                                                                                                                       |
|                          | Ethereal Ring     | (anti-magic anti everything field, protects for 10 min x dice concentration)                                                                                                                                                                                                                                                                                                            |
| Figurine                 | Spell Eater       | Spend 6 mana dice and feed a curse, spell, or other ill effect to the spell-eater. The ill effect is removed from the target. Doom: Summon the Spell Eater into the world.                                                                                                                                                                                                              |
| Key                      | Oubliette key     | Opening any door with this key leads the caster into a 10 x 10 stone room, which can only be opened from the outside. Has 24 hours of air.                                                                                                                                                                                                                                              |
|                          | Shrouded          | invisibility                                                                                                                                                                                                                                                                                                                                                                            |
|                          | Fold Space        | teleportation doom: gravity bomb, duplication, cloned, torn in half                                                                                                                                                                                                                                                                                                                     |
| A pair of mirrors        | Portal            |                                                                                                                                                                                                                                                                                                                                                                                         |
|                          | Recall            | teleport to a predesignated place                                                                                                                                                                                                                                                                                                                                                       |
|                          | Indolence         | lethargy, slowed movment , disadv on atks act after everyone, saving throw, may also be cast on mechanism or other things                                                                                                                                                                                                                                                               |
|                          | Quickening        |                                                                                                                                                                                                                                                                                                                                                                                         |
|                          | Serpent's Kiss    | caster grows fangs, draw out poison negating poison inflicting 1 flesh dmg , venom is stored to be inflicted dlater 1d6 poison                                                                                                                                                                                                                                                          |
|                          |                   |                                                                                                                                                                                                                                                                                                                                                                                         |





https://drive.google.com/file/d/0BxVHEMMjLlZ4UWYzX3o1UnEtd0U/view?resourcekey=0-ZqZEVaSwAMdy_U8B-AF0iA
https://drive.google.com/file/d/1xb-vRcK4i8VoOrQgSz1Uyvpx6p6N_jeu/view
https://drive.google.com/file/d/1wOAkBOCUSjnthMEnIsPVT1LSOCQzd88j/view
https://drive.google.com/file/d/1OTVy-5Vm44xhRmFO4tKFCJto-_cw0xYtD8lNj8AsSJY/view?pli=1
https://cairnrpg.com/hacks/glog-spells/
file:///Users/franco/Downloads/Wondrous_Weavings_Warped__Weird_v1.1.pdf
https://chartopia.d12dev.com/chart/3139/



- doom compass: points to the most dangerous thing in your life
- fishing spear: always hits a fish in a lake 
- resonance blade
- red blindfold: lets you see heartbeats in splashes of red but otherwise your vision becomes black and white lines 
- heartseeker bow
-  
- rope that becomes rigid as steel on command 
- a bell that makes a 10 foot bubble of silence 
- two headed silver rings: communication rings, spoken in whispers
- stone dagger: creature that is stuck with this is turned to the stone. Removing dagger instantly brings them back to life. Cutting with a dagger is easier than sticking a dagger into someone 
- sever rings: rings that hop to your fingers if you chop them off, until finally landing on your throat and wrapping around your throat; cursed but should have a positive aspect but should have a bad thing too 
- holy water: boils when a vampire is near 
- flash orb: a light source. if dropped, explodes and blinds those nearby 
- deathmask: stolen from a priest's sarcaphagous, placing it on a corpse lets you see the cause of death 
- Hanging
	- **Noose**. 10 feet of rope that can be solidly affixed to an object. A command word fuses and separates the noose end from the object.
- Burned at the stake
	- **Cinder**. Can provide warmth and/or light at *close* range using a command word.
- Beheading
	- **Axe**. A thirsting blade that inflicts 4-harm magical hand. Once a victim is killed, the blade seeks another victim. *Act under pressure* to stop yourself from attacking. The blade speaks to whoever is holding it.
- Riddled with arrows
	- **Arrow**. A magic glass-tipped arrow that drains blood from a creature. A command word can be used to drain the blood from the glass tip and restore one harm.
- Nailed to cross
	- **Nails**. Embedded nails can be used as magnets to draw metal objects toward you. When you speak the command word, roll +eerie. On a hit, it comes to you. 7-9, pick one: Too quickly or too slowly. Miss, the nails turn on you.
- Drinking poison
	- **Toxic blood**. If a creature tries to drink your blood, it takes harm. If you are unstable (and bleeding), touching your wounds inflicts 1 harm intimate. This includes anyone trying to heal you if they are not careful.
- Stoning
	- **Floating rock**. Can be thrown in midair and made to stay still or fall using a command word.
- Drowning
	- **Vial of water**. Can be used to divine the location of a monster, using a command word to activate and deactivate. When a monster is near, it boils. 
- Death by a thousand cuts
	- **Healing blade**. Can be used to heal cuts for 1 harm and stabilize. When it is used to heal, it reverts to a knife (1 harm hand) until dawn.



cleanse protect banish attract 

do divination before casting a spell

Do not be your main battery

write everything down: questions, manifestations, readings, spells, dreams, ideas

five senses of magic: 

- make collectibles 
- so make potions from these! 

- miscast.co: word bank system for words that you think are interesting in order to pull things together in a neat way 

ingredients must have a word > moon (flower) ; maybe a vague description ; like a sharp object ; reward hoarders 


d20 Noun
1 Fire
2 Emotions
3 Metal
4 Wood
5 Writing
6 Flesh
7 Water
8 Darkness
9 Animals
10 Treasure
11 Stone
12 Senses
13 Weather
14 Plants
15 Clothing
16 Decay
17 Dead
18 Memories
19 Connections
20 Devices

MAGIC VERB
d20

d20 Verb
1 Manipulate
2 Hurl
3 Create
4 Grow
5 Reduce
6 Ward
7 Detect
8 Hide
9 Summon
10 Shape
11 Damage
12 Halt
13 Disguise
14 Awaken
15 Purify
16 Mend
17 Adjust
18 Separate
19 Understand
20 Fuse

MISHAPS

d50 d50
1 All plant life within 1 mile withers and dies 26 You regenerate lost limbs in a day
2 Your eyes turn white 27 All alcohol within 5 miles becomes vinegar
3 You age 2d20 years 28 All trace of you is removed from history
4 You get 2d20 years younger 29 One possession turns into a mini golem
5 You do not age for 2d20 years 30 Tusks emerge from your jaw
6 d4 NPCs from your past turn to stone 31 Your flesh turns to wood
7 DIS check every rest or you turn into a cat

for the day

32 You know of a long-forgotten castle and
the secret to getting in
8 Your sweat corrodes metal 33 Your appearance switches to an NPC’s
9 You dreams see somebody else’s life 34 Your nose seals up. You need no breath
10 A morally-opposite copy of you appears 35 You learn a random new spell
11 Your skin becomes reflective 36 You can only eat, but can live off, grass
12 You lose all memory of family 37 You are blinded but have echolocation
13 Your incisors grow incessantly 38 The nearest animal become sentient
14 You have the body mass of a sealion 39 Your tongue grows forked & lisps heavily
15 You forget the value of money 40 A fearsome creature is hunting you down
16 Your voice sounds like it’s on helium 41 Unpleasant taste of metal in the mouth
17 Your toes turn into fingers 42 A nearby book character comes to life
18 Spider silk strands stick to all you touch 43 Switch your attribute dice clockwise
19 You change gender 44 You can only see in shades of orange
20 Your hair grows 1ft a day 45 Increase a random attribute
21 You lose all hair. It will never grow again 46 You attract cats. A lot
22 You grow to 8ft tall 47 You now have a familiar
23 You shrink to 4ft tall 48 Your hands are scalding to the touch
24 You shrink & grow 1ft by the lunar cycles 49 A third eye appears in your palm
25 You can only speak in a whisper 50 You feel the call of the Wild



Tables for Magic
Potions and Fixatives

| d100 | Potions and fixatives | Effect                                                       | Ingredients |
| ---- | --------------------- | ------------------------------------------------------------ | ----------- |
| 1    | Love potion           |                                                              |             |
| 2    | Battle                |                                                              |             |
| 3    | Knock-out             |                                                              |             |
| 4    | Invisibility          |                                                              |             |
| 5    | Truth serum           |                                                              |             |
| 6    | Floating              |                                                              |             |
| 7    | Water-breathing       |                                                              |             |
| 8    | Antidote              |                                                              |             |
| 9    | Healing               |                                                              |             |
| 10   | Paralysis             |                                                              |             |
| 11   | Sliminess             | Makes you slimy and easy to escape situations                |             |
| 12   | Fusion glue           | Applying this potion topically will adhere any two items together permanently. |             |
| 13   | Venom                 | Weapons coated in this venom deal an additional 1 damage for each successful attack, but the weapon will lose durability with each hit. |             |


spell that helps you track (but has some other bad effect) / affects your other senses




- catch bullet
- invisible
- false death 
- rope trick 
- fake sound
- hypnosis
- sleep
- optical illusion
- apply leeches
- speak with vermin
- speak with the dead 
- raise dead 
- purify water
- instill fear 
- Cauldron: Armor buff and spells etched onto the cauldron
- Blood Into Rope: The caster can drain their own blood and weave it into a red rope. Arterial blood is dynamic, veinous blood is static. The rope is non-animate but will un-knot on command. It counts as magical, which means it could be used to, for instance, strangle a Ghost. Rope is 30ft long per hp sacrificed.


https://game-icons.net/

https://mausritter.com/adventure-site/

https://dngngen.makedatanotlore.dev/





- [[4301 Darkvision]]
- [[4302 Skinwalker]]
- [[4303 Puppet]]
- [[4304 Speak to the Dead]]
- [[4305 Wall of]]
- [[4306 Missile of]]
- [[4307 Blast of]]
- [[4308 Ball of]]
- [[4309 Wither]]
- [[4310 Fly]]
- [[4311 Bell of Lies]]
- [[4312 Sympathy]]
- [[4313 Illusions]]
- [[4314 Third Eye]]
- [[4315 Tap In]]
- [[4316 Telepathy]]
- [[4317 Inflict disease]]
- [[4318 Jinx]]
- [[4319 Shield]]
- [[4320 Beast speech]]
- [[4321 Blood drinker]]
- [[4322 Tongues]]
- [[4323 Banish]]
- [[4324 Stop Time]]
- [[4325 Bind]]
- [[4326 Haste]]
- [[4327 Inhuman strength]]


---

---

(Some ideas are from https://drive.google.com/file/d/1ElPb31rsmZN7UUUoWIEUTFIvYH-6VZ3r/view)


The game starts with your execution. You are rescued from your execution by divine intervention from [[2200 Your God]]. They leave you with a memento depending on the method of execution. 






IDEAS

    Book of Secrets - To keep track of secrets, symbols, passwords my players have discovered or to invent new ones on the fly. 



    Book of Flora - To keep track of the strange things my players like to collect on adventures so I can make them useful later. 


Stickers for modular level advancement, spell cards to represent real objects (and object cards / weapon cards)

