---
title: Items
layout: default
permalink: /items
parent: Players Guide
nav_order: 8
grand_parent: Heretics
---
{% include toc.html %}

# Items

## Reading an item line
Items are described with additional tags. 

*n*/*x*: This means there are n number of items out of a potential total x that can fit in a single inventory slot. For example, "torch 1/2" means there is one torch in this slot out of a potential 2 total. "arrows 20/20" means there are 20 arrows out of a potential total 20 in a single slot. 

*x*d*n*: This indicates the amount of dice to be rolled for an effect and which type. For example, "cudgel 1d4" is a cudgel that inflicts 1d4 damage. 

ad+*n*: This indicates a bonus to armored defense stat. 

ad=*n*: This indicates a replacement of the armored defense stat.

body, head, *n*h, feet: This indicates where an item is worn when equipped. *n*h indicates how many hands are in a character's hands. An item with 1h is carried in 1 hand, 2h in 2 hands.

md+*n*: This indicates a bonus to warded defense stat.

*n* slots: This indicates that an object takes up multiple slots.

*reach, concealable, versatile, subtle, thrown*, etc: These are additional modifiers to weapons with special effects. 

*x*/*n*r: This indicates the range for an item in feet. The first number is the distance up to which an item can be thrown or fired, beyond which the item is thrown at disadvantage. The second number is as far as the item can be thrown or fired. Items with the thrown tag need this range number as well. 

at: This indicates that an item must be attuned to, which impacts the magical item limitation. All wards and magic items require attunement while items containing spells do not, unless otherwise specified.

## Inventory and Load
Inventory is a core feature of this game. Characters may carry up to their maximum load (equal to their strength defense).

Keeping track of it is important. Unless stated otherwise, every item takes up one slot. Smaller items can be grouped in bundles and treated as one slot. For example, "chalk, 20/20" means a bundle of 20 pieces of chalk taking up one slot. A slot can be assumed to weigh between 1 to 5 pounds or 1 to 2 kilos. It may also contain a magical item. 1-500 coins takes up one slot.

Unless they are magical, clothing, footwear, jewelry, backpacks, and sacks do not take up slots (though armor does).

### Quick Slots and Deep Slots
Getting an item out of your inventory during combat is considered a stunt with a DC equal to the slot number. On a success the stunt allows the stunt to be a free action. Otherwise it takes an action. 

Quick slots do not require a stunt to take out. Quick slots must contain items that are actively in your hands. 

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

| weapon            | dmg  | slots | hands    | cost | special                                | dmg type                        |
| ----------------- | ---- | ----- | -------- | ---- | -------------------------------------- | ------------------------------- |
| unarmed strike    | =str | 0     | n/a      | n/a  |                                        | bludgeoning                     |
| cudgel            | 1d4  | 1     | 1h       | 5    |                                        | bludgeoning                     |
| staff             | 1d4  | 1     | 1h or 2h | 5    | reach\*                                | bludgeoning                     |
| dagger            | 1d6  | 1     | 1h       | 50   | concealable, subtle, dual-wield        | piercing, slashing              |
| pick axe          | 1d6  | 1     | 1h       | 5    |                                        | piercing                        |
| mace, flail       | 1d6  | 2     | 1h or 2h | 50   | versatile, crushing                    | piercing, bludgeoning           |
| short sword       | 1d6  | 2     | 1h or 2h | 50   | versatile, parrying                    | piercing, slashing              |
| hand axe          | 1d6  | 2     | 1h or 2h | 50   | versatile, thrown (20/60r), dual-wield | slashing, bludgeoning           |
| spear             | 1d6  | 2     | 1h or 2h | 50   | versatile, thrown (20/60r), reach*     | piercing, bludgeoning           |
| war hammer        | 1d8  | 2     | 2h       | 100  | crushing                               | bludgeoning                     |
| long sword        | 1d8  | 2     | 2h       | 100  | parrying                               | piercing, slashing              |
| scythe            | 1d8  | 2     | 2h       | 50   | shoving                                | piercing, slashing              |
| battle axe        | 1d8  | 2     | 2h       | 100  | shoving                                | slashing, bludgeoning           |
| halberd, pole axe | 1d8  | 3     | 2h       | 100  | reach, double-edged, shoving           | piercing, slashing, bludgeoning |

Improvised weapon attacks usually inflict 1d4 damage.

- *Concealable*: Can be hidden on the body when searched
- *Subtle:* If an attack is done secretly, this inflicts 3 x weapon die damage or flesh damage (on a player character).
- *Versatile:* This weapon may be used with 2 hands.
- *Shoving:* On a 20 or higher that hits, the attacker may choose to shove or trip the target.
- *Dual-wield:* Two of these weapons can be wielded at the same time. On a 20 or higher that hits, the attacker may roll an additional weapon die. 
- *Parrying:* On a 20 or higher that hits, the attacker's armored defense is increased by their +str bonus the next time the attacker is hit. 
- *Crushing:* On a 20 or higher that hits, the target's armored defense is reduced by the attacker's +str bonus the next time the target is hit.
- *Double-edged:* On a 20 or higher that hits, the attacker may make another attack with the butt of the polearm, inflicting 1d4 damage.
- *2h:* Roll 2 weapon die and take the higher result. 
- *Thrown:* This weapon can be thrown at the stated range. Otherwise weapons are thrown at 10/20 range.
- *Reach*: This weapon has a 10 foot reach when wielded with 2 hands only. 
   - The spear and staff only have 10 foot reach when wielded with 2 hands even though it can also be wielded in 1 hand.

#### Sundering Melee Attacks
On a hit, a character may choose to destroy their weapon to inflict double dice damage.

### Missile Weapons

| weapon               | range     | loading | dmg | slots | hands | cost | special     |
| -------------------- | --------- | ------- | --- | ----- | ----- | ---- | ----------- |
| sling                | 60/240r   |         | 1d6 | 1     | 1     | 5    | concealable |
| bow                  | 150/600r  |         | 1d6 | 2     | 2     | 50   |             |
| crossbow             | 300/1200r | 1 round | 1d8 | 2     | 2     | 500  |             |
| 20/20 arrows / bolts |           |         |     | 1     |       | 50   |             |

## Medicinals
Components can be foraged and combined into medicinals. Refer to **Foraging**.

Monster parts may also be used to craft items, in coordination with the referee and may require appropriate checks. Intelligence check against a DC equal to 10 + monster HD may be appropriate. 

### Crafting 
The following table has substances along with their application, effects, and recipes. Solvents can include oils, water, honey. Creating medicinals takes 10 minutes. All medicinals are 5 to a slot. For example, "Poultice 5/5". Medicinals are created one for one.

For creatures afflicted by diseases, combinations of medicinals below may be used to treat diseases, where sensible.

When choosing starting equipment, roll 1d10, or choose from medicinals 1-10 and receive 5/5 of the medicinal 

| 1d10 | Medicinal           | Usage                                                                    | Effects                                                                                                                                                                 | Recipe                                                                 |
| ---- | ------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|      | Wary nettle, smoked | 1 action, smoked                                                         | Exhale smoke in 10 foot line to put INT bonus worth of HD creatures to sleep for 2 rounds. Inhale, induces sleep.                                                       | Warynettle                                                             |
|      | Anti-magic smoke    | 1 action, burned in censor or pit                                        | Suppresses magic in a 10 radius cube for 3 combat rounds (30 seconds)                                                                                                   | Heartsbane (powdered), warynettle                                      |
|      | Devils sleep        | 1 action, drunk                                                          | Disadvantage on all rolls for 30 seconds (3 combat rounds), roll strength save versus brewer's intelligence defense or suffer 3d6 direct damage (9d6 for NPCs)          | Devilsgrace, warynettle, hot water (brewed)                            |
|      | Heartsbane powder   | 1 action, eaten or drunk                                                 | Inflicts 2d6 direct damage (6d6 for NPCs), coagulates blood, kills creature after INT bonus hours                                                                       | Heartsbane (powdered), devilsgrace (secretion)                         |
| 1    | Poultice            | 1 minute, applied to wounds                                              | Heal 1d8 of grit, stabilize dying creature                                                                                                                              | 2 of any of the following: Lionspaw, feverfew, sarnis hip; any solvent |
| 2    | Deadsalt            | 1 action, dashed at enemies or sprinkled in a solid circle (3 deadsalts) | Dash: Turns HD of undead equal to WIL bonus. Protective Circle: Prevents magic effects or magical creatures (undead, fey, fiends, and celestials) from crossing through | Salt, ground flint moss                                                |
| 3    | Darksight salve     | 1 action, applied to eyes                                                | Enables darkvision for 1 hour                                                                                                                                           | Sightleaf, solvent                                                     |
| 4    | Courage tea         | 1 action, drunk                                                          | Restores grit equal to the brewer's INT bonus (as long as flesh is above 0), removes effects of fear                                                                    | Sarnis hip, hot water (brewed)                                         |
| 5    | Antitoxin           | 1 action, drunk                                                          | Causes drinker to expel toxin from body quickly, taking 1 point of direct damage (3 for NPCs)                                                                           | Honeyfoil, sarnis hip, hot water (brewed)                              |
| 6    | Mossbomb            | 1 action, lit and tossed (up to 60 feet)                                 | Explosion inflicting 2d6 bludgeoning damage and starting a fire in a 10 foot radius                                                                                     | Flint moss, guano, container, fuse                                     |
| 7    | Wary tea            | 1 action, drunk                                                          | Sense the presence of undead, fiends, celestials, and fey within a 60 foot radius for 10 minutes                                                                        | Sightleaf, warynettle, hot water (brewed)                              |
| 8    | Focus smoke         | 1 action, smoked                                                         | Inhale smoke to gain +1 to ranged attacks for 6 rounds (1 minute)                                                                                                       | Sightleaf (ground), devilsgrace (secretion), starcomb                  |
| 9    | Restoring poultice  | 10 minutes, applied to wounds or eaten                                   | Restores abilities reduced by injuries                                                                                                                                  | Heartsbane (powdered), lionspaw, feverfew, any solvent                 |
| 10   | Consecrating powder | 1 action, sprinkled in a circle or over a threshold                      | Consecrates a space bound by the circle (5 slots) or walls and thresholds (1 slot per threshold); undead suffer -1 to all rolls                                         | Heartsbane (powdered), salt, warynettle (powdered)                     |


## Magical Items
Magical items require attunement. Attuning requires 1 uninterrupted hour of contemplation with the object to be attuned. Attuned items must be in the attuned character's inventory in order to be used.

- **Weapons:** Weapons with magical properties. These always require attunement. Note that weapons of different materials (silver, gold, obsidian) are not magical unless specified to be magical. 
- **Focuses:** Wands, rods, staffs used to improve spell-casting. These always require attunement. You may only wield one of these at a time. 
- **Objects of Power:** Items with magical effects. These always require attunement. 
- **Wards:** Wards with protective magical abilities. These usually do not require attunement. 
- **Spells:** Artifacts, relics, spellbooks, and other objects that can be used to cast spells. Spells never require attunement.

### Attunement

Characters may carry any number of magical items but may only be attuned to a number of magical items equal to their willpower bonus. Attuning takes 1 hour and must be done during a period of rest. 

Magical items that have ongoing effects require attunement, while most spells (represented by items like spellbooks, tablets, idols, scrolls, runestones etc) do not. 

Wards also fall under this category and must be attuned to. Wards may be fetishes, bracelets, necklaces, rings, or other such items that provide a bonus to a character's magical defense stat. 

### Spells
Spells are cast from items, thereby removing the need for tracking separate spell slots. Spells take up item slots and must be used with two hands when cast. Spells do not typically require attunement.

### Wards
Wards augment Warded defense. Starting wards are very simple, likely made by the character, local religious figures, wise folks, or stumbled upon. 

Characters may not start with stronger wards than md+1.

- fetish md+1 at, 10 coins
- chain md+1 at, 20 coins
- charm md+1 at, 10 coins
- scapular md+1 at, 5 coins

Wards can be broken to nullify the effects of a spell on the wielder (and only the wielder). Other magical items do not have this ability, unless specified. For example, if a fireball is cast in an area and the target has a ward that they wish to break as a reaction to avoid all damage from the fireball, they may do so; however, anyone or anything else in that area of effect is still affected. Basically, this is not a free counterspell but a magical bubble. The ward cannot be repaired. 