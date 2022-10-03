Using JSON to express items and creatures: 

# Player Characters

```json
OgdenDankworth: {
   lvl: 1,
   xp: 0,
   grit: 8,
   flesh: 1,
   str: 1,
   dex: 4,
   int: 1,
   wil: 1,
   load: 11,
   ad: 15,
   sup: 11,
   md: 12,
   attune: 1,
   retainers: 1,
   inventory: ["gambeson", "fetish", "grappling hook", "tinderbox", "saw", "dice set", "mace", "rations", "rations"]   
};
```
# Item attributes
- Durability
- Damage
- Hand
- Slots
- Magic
- Attunement
- Ward
- Armor Defense
- Add to Dexterity
- Add to Armor
- Description
- Recharge

# Weapons

```json
mace: {
   dur: 3,
   dmg: "d8",
   hand: 1,
   slots: 1,
   magic: null,
   attune: null
};
```
# Armor
```json
gambeson: {
   dur: 1,
   ad: 1,
   dexadd: true,
   slots: 1,
   magic: null
   attune: null
};
```
```json
fullPlate: {
   dur: 7,
   ad: 16,
   dexadd: false,
   slots: 5,
   magic: null
   attune: null
};
```

```json
helmet: {
   dur: 1,
   ad: 1,
   dexadd: true,
   armoradd: true,
   slots: 1,
   magic: null,
   attune: null
};
```


Wards
```json
creepyDoll: {
   slots: 1,
   attune: true,
   desc: "A creepy doll that smiles at you every time you smile."
   ward: 1
};
```


Spells

```json
fireball: {
   slots: 1,
   desc: "Inflicts Ld6 fire damage in a L*10' radius sphere up to 30' away."
   recharge: "Throw into a roaring bonfire and retrieve after all that is left is smoke."
};
```

Misc
```json
grapplingHook: {
   slots: 1,
   desc: "grappling hook"
   attune: false
};
```

# Monsters

```json
StrandedOne: {
   HD: 5,
   AD: 15,
   MD: 15,
   HP: 25,
   dmg: "+5 2d8 grappling",
   str: 5,
   dex: 0,
   int: 7,
   wil: 5,
   abilities: [
      "burrow",
      "spiderclimb",
      "disrupt psyche: 30' radius MD save 15 or incapacitated, 2 uses",
      "mind drink: atk +5, 1 grappled target, -1d6 wil"
   ]
}
```

```json
ghoul: {
   HD: 1,
   AD: 12,
   MD: 12,
   HP: 6,
   dmg: "+4 1d8 paralyzing touch",
   str: 3,
   dex: 2,
   int: -1,
   wil: 2,
   abilities: [
      "paralyzing touch: MD save 12 vs paralysis 1 turn"
   ]
}
```

```json
jungleCat: {
   HD: 1,
   AD: 9,
   MD: 9,
   HP: 5,
   dmg: "+3 1d8 pounce",
   str: 2,
   dex: 2,
   int: 3,
   wil: -1,
   abilities: [
      "pounce: knock prone",
      "prowl: ignores jungle terrain"
   ]
}
```