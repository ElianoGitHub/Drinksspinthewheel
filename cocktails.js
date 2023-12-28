// Array of cocktails with their details
const cocktails = [
    {
      name: 'Martini',
      imageUrl: 'https://i.imgur.com/O8J5srt.png',
      ingredients: [
        '2 1/2 ounces (75 ml) Gin',
        '1/2 ounce (15 ml) Dry Vermouth',
        'Ice cubes',
        'Lemon twist or olive, for garnish'
      ],
      instructions: [
        'Chill the Glass: Place your martini glass in the freezer or fill it with ice water to chill.',
        'Prepare the Ingredients: Measure out 2 1/2 ounces (75 ml) of gin and 1/2 ounce (15 ml) of dry vermouth.',
        'Prepare the Mixing Glass: Fill a mixing glass with ice cubes.',
        'Add the Gin and Vermouth: Pour the measured gin and dry vermouth into the mixing glass.',
        'Stir or Shake: Stir the ingredients in the mixing glass for about 30 seconds.',
        'Strain Into the Glass: Strain the mixture into the chilled martini glass.',
        'Garnish: Express the oil from a lemon twist over the cocktail and drop it in the drink.'
      ]
    },
    {
      name: 'Margarita',
      imageUrl: 'https://i.imgur.com/cnDWWNH.png',
      ingredients: [
        '2 ounces (60 ml) Tequila (100% agave)',
        '1 ounce (30 ml) Triple Sec or Cointreau',
        '3/4 ounce (22.5 ml) Freshly squeezed lime juice',
        '1/2 ounce (15 ml) Simple syrup (adjust to taste)',
        'Ice cubes',
        'Salt (for rimming, optional)',
        'Lime wedge, for garnish'
      ],
      instructions: [
        'Prepare the Glass: If desired, rim the glass with salt.',
        'Prepare the Ingredients: Measure out tequila, triple sec, lime juice, and simple syrup.',
        'Mix the Margarita: Combine the tequila, triple sec, lime juice, and simple syrup in a shaker.',
        'Shake: Shake vigorously for about 10-15 seconds.',
        'Strain Into the Glass: Strain into the prepared glass.',
        'Garnish: Garnish with a lime wedge on the rim.'
      ]
    },
    {
      name: 'Old Fashioned',
      imageUrl: 'https://i.imgur.com/pLc6Yj9.png',
      ingredients: [
        '2 ounces (60 ml) Bourbon or Rye whiskey',
        '1 sugar cube (or 1/2 ounce simple syrup)',
        '2-3 dashes Angostura bitters',
        'Orange peel (for garnish)',
        'Ice cubes'
      ],
      instructions: [
        'Prepare the Sugar Cube: Place a sugar cube at the bottom of an old-fashioned glass.',
        'Add Bitters: Add 2-3 dashes of Angostura bitters directly onto the sugar cube.',
        'Muddle: Use a muddler to muddle the sugar cube and bitters.',
        'Add Whiskey: Pour bourbon or rye whiskey into the glass.',
        'Add Ice: Add a few ice cubes to the glass.',
        'Stir: Stir gently to combine the ingredients.',
        'Garnish: Express the oils from an orange peel over the glass and drop it in the drink.'
      ]
    },
    {
        name: 'Negroni',
        imageUrl: 'https://i.imgur.com/Iryayuy.png',
        ingredients: [
          '1 ounce (30 ml) Gin',
          '1 ounce (30 ml) Campari',
          '1 ounce (30 ml) Sweet Vermouth',
          'Orange twist (for garnish)',
          'Ice cubes'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out 1 ounce (30 ml) of gin, Campari, and sweet vermouth.',
          'Combine Ingredients: In a mixing glass or stirring glass, add the measured gin, Campari, and sweet vermouth.',
          'Add Ice: Fill the mixing glass with ice cubes.',
          'Stir: Stir the ingredients well with a bar spoon for about 20-30 seconds.',
          'Strain Into Glass: Strain the mixture into a rocks glass filled with ice.',
          'Garnish: Take a wide strip of orange peel and express the oils over the drink. Drop the peel into the glass as a garnish.'
        ]
      },
      {
        name: 'Whiskey Sour',
        imageUrl: 'https://i.imgur.com/y2A5zkj.png',
        ingredients: [
          '2 ounces (60 ml) Bourbon or Rye whiskey',
          '3/4 ounce (22.5 ml) Freshly squeezed lemon juice',
          '1/2 ounce (15 ml) Simple syrup',
          'Ice cubes',
          'Lemon slice and cherry (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out 2 ounces (60 ml) of your preferred Bourbon or Rye whiskey, lemon juice, and simple syrup.',
          'Combine Ingredients: In a shaker, add the measured whiskey, lemon juice, and simple syrup.',
          'Add Ice: Fill the shaker with ice cubes.',
          'Shake: Shake the ingredients vigorously for about 10-15 seconds.',
          'Strain Into Glass: Strain the mixture into a rocks glass filled with ice.',
          'Garnish: Garnish the drink with a lemon slice and a cherry.'
        ]
      },
      {
        name: 'Cosmopolitan',
        imageUrl: 'https://i.imgur.com/S75ah43.png',
        ingredients: [
          '1 1/2 ounces (45 ml) Vodka',
          '1 ounce (30 ml) Triple Sec or Cointreau',
          '3/4 ounce (22.5 ml) Cranberry juice',
          '1/2 ounce (15 ml) Freshly squeezed lime juice',
          'Ice cubes',
          'Orange twist (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out vodka, triple sec or Cointreau, lime juice, and cranberry juice.',
          'Combine Ingredients: In a shaker, add the measured vodka, triple sec or Cointreau, lime juice, and cranberry juice.',
          'Add Ice: Fill the shaker with ice cubes.',
          'Shake: Shake the ingredients vigorously for about 10-15 seconds.',
          'Strain Into Glass: Strain the mixture into a martini glass or a coupe glass.',
          'Garnish: Express the oil from an orange twist over the cocktail. Drop the twist into the drink.'
        ]
    },
    {
        name: 'Mai Tai',
        imageUrl: 'https://i.imgur.com/CT87RsW.png',
        ingredients: [
          '2 ounces (60 ml) Aged Jamaican Rum',
          '3/4 ounce (22.5 ml) Fresh lime juice',
          '1/2 ounce (15 ml) Orange liqueur (such as Curaçao or triple sec)',
          '1/2 ounce (15 ml) Orgeat syrup',
          '1/4 ounce (7.5 ml) Simple syrup',
          'Crushed ice'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out the rum, lime juice, orange liqueur, orgeat syrup, and simple syrup.',
          'Combine Ingredients: In a shaker, add the measured ingredients.',
          'Shake: Add crushed ice to the shaker and shake vigorously.',
          'Strain Into Glass: Strain into a glass filled with crushed ice.',
          'Garnish: Garnish with a mint sprig and a lime wheel.'
        ]
      },
      {
        name: 'Gin and Tonic',
        imageUrl: 'https://i.imgur.com/6SrbIWJ.png',
        ingredients: [
          '2 ounces (60 ml) Gin',
          '4 to 6 ounces (120 to 180 ml) Tonic Water',
          'Ice cubes'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out the gin and tonic water.',
          'Fill a Glass with Ice: Fill a highball glass with ice cubes.',
          'Combine Ingredients: Pour the gin over the ice and top with tonic water.',
          'Stir Gently: Stir to combine.',
          'Garnish: Garnish with a lime wedge and rosemary.'
        ]
      },
      {
        name: 'Moscow Mule',
        imageUrl: 'https://i.imgur.com/IreKPU4.png',
        ingredients: [
          '2 ounces (60 ml) Vodka',
          '1/2 ounce (15 ml) Freshly squeezed lime juice',
          '4 to 6 ounces (120 to 180 ml) Ginger Beer',
          'Ice cubes'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out the vodka, lime juice, and ginger beer.',
          'Fill a Copper Mug with Ice: Fill a copper mug with ice cubes.',
          'Combine Ingredients: Pour the vodka and lime juice over the ice, then top with ginger beer.',
          'Stir Gently: Stir to combine.',
          'Garnish: Garnish with a lime wedge and fresh mint sprig.'
        ]
      },
      {
        name: 'Caesar',
        imageUrl: 'https://i.imgur.com/vJPagMq.png',
        ingredients: [
          '1 1/2 ounces (45 ml) Vodka',
          '4 ounces (120 ml) Clamato juice',
          '1 dash Worcestershire sauce',
          '1 dash Hot sauce',
          'Celery salt'
        ],
        instructions: [
          'Rim the Glass: Use a lime wedge to moisten the rim and dip into celery salt.',
          'Prepare the Ingredients: Measure out the vodka, Clamato juice, Worcestershire sauce, and hot sauce.',
          'Combine Ingredients: Add all ingredients to a glass filled with ice cubes.',
          'Stir: Stir gently to combine.',
          'Garnish: Garnish with a celery stalk and a lime wedge.'
        ]
      }
      {
        name: 'Tom Collins',
        imageUrl: 'https://i.imgur.com/14pwLmN.png',
        ingredients: [
          '2 ounces (60 ml) Gin',
          '3/4 ounce (22.5 ml) Freshly squeezed lemon juice',
          '1/2 ounce (15 ml) Simple syrup',
          'Club soda (to top)',
          'Ice cubes'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out gin, lemon juice, and simple syrup.',
          'Combine Ingredients: In a shaker, add the measured ingredients.',
          'Shake: Add ice cubes to the shaker and shake vigorously.',
          'Strain Into Glass: Strain into a Collins glass filled with ice.',
          'Top with Club Soda: Fill with club soda.',
          'Stir Gently: Stir to mix.',
          'Garnish: Garnish with lemon slice and maraschino cherry.'
        ]
      }
      {
        name: 'Manhattan',
        imageUrl: 'https://i.imgur.com/cNz7aj5.png',
        ingredients: [
          '2 ounces (60 ml) Rye whiskey or Bourbon',
          '1 ounce (30 ml) Sweet Vermouth',
          '2-3 dashes Angostura bitters',
          'Ice cubes'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out rye whiskey or bourbon, sweet vermouth, and bitters.',
          'Combine Ingredients: In a mixing glass, add the measured ingredients.',
          'Stir: Stir with ice for 20-30 seconds.',
          'Strain Into Glass: Strain into a chilled glass.',
          'Garnish: Garnish with a maraschino cherry and an orange twist.'
        ]
      }
      {
        name: 'Piña Colada',
        imageUrl: 'https://i.imgur.com/Tzt23IQ.png',
        ingredients: [
          '2 ounces (60 ml) White Rum',
          '3 ounces (90 ml) Pineapple Juice',
          '1 ounce (30 ml) Coconut Cream',
          '1 cup Ice'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out rum, pineapple juice, and coconut cream.',
          'Blend: In a blender, combine all ingredients with ice until smooth.',
          'Pour Into Glass: Pour into a chilled glass.',
          'Garnish: Garnish with a pineapple wedge and maraschino cherry.'
        ]
      }
      {
        name: 'Mojito',
        imageUrl: 'https://i.imgur.com/ziGUbNJ.png',
        ingredients: [
          '2 ounces (60 ml) White Rum',
          '1 ounce (30 ml) Freshly squeezed lime juice',
          '2 teaspoons (10 g) White sugar (adjust to taste)',
          '8-10 Fresh mint leaves',
          'Soda water (club soda)',
          'Ice cubes'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out rum, lime juice, and sugar.',
          'Muddle Mint and Sugar: Crush mint leaves with sugar in a glass.',
          'Add Lime Juice and Rum: Pour in the lime juice and rum.',
          'Stir Until Sugar Dissolves: Mix until sugar dissolves.',
          'Fill Glass with Ice: Add ice cubes.',
          'Top with Soda Water: Fill with club soda.',
          'Garnish: Garnish with lime wedge and mint sprig.'
        ]
      },
      {
        name: 'Espresso Martini',
        imageUrl: 'https://i.imgur.com/rf7bSg2.png',
        ingredients: [
          '1 1/2 ounces (45 ml) Vodka',
          '1 ounce (30 ml) Coffee liqueur (e.g., Kahlúa)',
          '1 ounce (30 ml) Freshly brewed espresso (cooled)',
          '1/2 ounce (15 ml) Simple syrup (adjust to taste)',
          'Ice cubes'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out vodka, coffee liqueur, espresso, and simple syrup.',
          'Add Ingredients to Shaker: Combine in a cocktail shaker.',
          'Shake Vigorously: Shake with ice cubes.',
          'Strain Into Glass: Pour into a chilled glass.',
          'Garnish: Garnish with coffee beans.'
        ]
      },
      {
        name: 'Daiquiri',
        imageUrl: 'https://i.imgur.com/14oYwYP.png',
        ingredients: [
          '2 ounces (60 ml) White Rum',
          '3/4 ounce (22.5 ml) Freshly squeezed lime juice',
          '1/2 ounce (15 ml) Simple syrup (adjust to taste)',
          'Ice cubes'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out rum, lime juice, and simple syrup.',
          'Combine Ingredients: Add to a shaker.',
          'Shake: Shake vigorously with ice.',
          'Strain Into Glass: Pour into a chilled glass.',
          'Garnish: Garnish with a lime wheel or wedge.'
        ]
      },
      {
        name: 'Bellini',
        imageUrl: 'https://i.imgur.com/fxdkJLo.png',
        ingredients: [
          '2 ripe Peaches (or 2/3 cup peach purée)',
          '1 teaspoon Lemon juice',
          '1 teaspoon Simple syrup (optional, adjust to taste)',
          'Chilled Prosecco or Champagne',
          'Ice cubes (optional)'
        ],
        instructions: [
          'Prepare the Ingredients: Blend peaches and lemon juice to make purée.',
          'Prepare the Bellini Base: Add peach purée to a chilled flute.',
          'Add Prosecco or Champagne: Top with sparkling wine.',
          'Stir Gently (Optional): Mix gently.',
          'Add Ice (Optional): Add ice cubes if desired.',
          'Garnish: Garnish with a peach slice or raspberry.'
        ]
      }
      {
        name: 'Long Island Iced Tea',
        imageUrl: 'https://i.imgur.com/dgcJihK.png',
        ingredients: [
          '1/2 ounce (15 ml) Vodka',
          '1/2 ounce (15 ml) Tequila',
          '1/2 ounce (15 ml) Rum',
          '1/2 ounce (15 ml) Gin',
          '1/2 ounce (15 ml) Triple Sec',
          '3/4 ounce (22.5 ml) Freshly squeezed lemon juice',
          '1/2 ounce (15 ml) Simple syrup',
          '1 ounce (30 ml) Cola (approximately)',
          'Ice cubes'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out spirits, lemon juice, and simple syrup.',
          'Combine the Spirits: In a shaker, add vodka, tequila, rum, gin, and triple sec.',
          'Add Lemon Juice and Simple Syrup: Pour in lemon juice and simple syrup.',
          'Shake Vigorously: Shake the mixture for about 10-15 seconds.',
          'Strain Into Glass: Strain into a highball glass filled with ice cubes.',
          'Top with Cola: Add cola to the top of the glass.',
          'Stir Gently: Give the drink a gentle stir.',
          'Garnish: Garnish with a lemon wheel on the rim of the glass.'
        ]
      },
      {
        name: 'Sazerac',
        imageUrl: 'https://i.imgur.com/n0hp1FM.png',
        ingredients: [
          '2 ounces (60 ml) Rye whiskey',
          '1 Sugar cube',
          '3 dashes Peychaud\'s Bitters',
          'Absinthe or Absinthe substitute',
          'Lemon peel (for garnish)',
          'Ice cubes (for chilling)'
        ],
        instructions: [
          'Prepare the Glass: Chill an old-fashioned glass.',
          'Muddle the Sugar Cube: Place a sugar cube in the glass.',
          'Add Bitters: Add 3 dashes of Peychaud\'s Bitters.',
          'Muddle and Stir: Muddle the sugar cube with bitters. If using a mixing glass, add rye whiskey and stir well with ice.',
          'Rinse the Glass with Absinthe: Discard ice, add a small amount of absinthe, swirl, and discard excess.',
          'Strain the Mixture: If using a mixing glass, strain the mixture into the prepared glass.',
          'Express Lemon Peel: Express lemon peel over the drink.',
          'Drop Lemon Peel Into Glass: Garnish by dropping the twisted lemon peel into the glass.',
          'Serve Neat: Traditionally served without ice.'
        ]
      },
      {
        name: 'Floradora',
        imageUrl: 'https://i.imgur.com/CIPtEZN.png',
        ingredients: [
          '2 ounces (60 ml) Gin',
          '1/2 ounce (15 ml) Raspberry liqueur (such as Chambord)',
          '3/4 ounce (22.5 ml) Freshly squeezed lime juice',
          'Ginger ale',
          'Fresh raspberries (for garnish)',
          'Lime wheel (for garnish)',
          'Ice cubes'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out gin, raspberry liqueur, and lime juice.',
          'Combine Ingredients: In a shaker, add gin, raspberry liqueur, and lime juice.',
          'Add Ice: Fill the shaker with ice cubes.',
          'Shake: Shake the ingredients vigorously for about 10-15 seconds.',
          'Strain Into Glass: Strain into a chilled Collins glass or a lowball glass filled with ice.',
          'Top with Ginger Ale: Add ginger ale to the top.',
          'Stir Gently: Give the drink a gentle stir.',
          'Garnish: Garnish with fresh raspberries and a lime wheel on the rim of the glass.'
        ]
      },
      {
        name: 'Paloma',
        imageUrl: 'https://i.imgur.com/L4QSOiT.png',
        ingredients: [
          '2 ounces (60 ml) Tequila (blanco or reposado)',
          '1/2 ounce (15 ml) Freshly squeezed lime juice',
          'Pinch of Salt',
          '1 teaspoon (5 g) Sugar (optional, adjust to taste)',
          '4 ounces (120 ml) Grapefruit soda (such as Jarritos or Squirt)',
          'Grapefruit wedge (for garnish)',
          'Ice cubes'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out tequila and lime juice.',
          'Combine Tequila, Lime Juice, and Sweetener: In a shaker, add tequila, lime juice, salt, and optional sugar.',
          'Shake: Shake well with ice for about 10-15 seconds.',
          'Strain Into Glass: Strain into a highball glass or a Collins glass filled with ice.',
          'Top with Grapefruit Soda: Top with grapefruit soda.',
          'Stir Gently: Give the drink a gentle stir.',
          'Garnish: Garnish with a grapefruit wedge on the rim of the glass.'
        ]
      },
      {
        name: 'Activated Charcoal Martini',
        imageUrl: 'https://i.imgur.com/rkg9FJz.png',
        ingredients: [
          '2 ounces (60 ml) Vodka or Gin',
          '1/2 ounce (15 ml) Dry Vermouth',
          '1/2 ounce (15 ml) Simple Syrup',
          '1/4 teaspoon Activated Charcoal Powder',
          'Ice cubes',
          'Dehydrated orange (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out vodka or gin, dry vermouth, simple syrup, and activated charcoal powder.',
          'Combine Ingredients: In a mixing glass, add vodka or gin, dry vermouth, simple syrup, and activated charcoal powder.',
          'Add Ice: Fill the mixing glass with ice cubes.',
          'Stir: Stir the ingredients gently for about 15-20 seconds.',
          'Strain Into Glass: Strain into a chilled martini glass.',
          'Express Lemon Twist: Express the oil from a lemon twist over the drink.',
          'Garnish: Garnish with a dehydrated orange wheel.'
        ]
      }
      {
        name: 'Matcha Mojito',
        imageUrl: 'https://i.imgur.com/rqnNu2Z.png',
        ingredients: [
          '2 ounces (60 ml) White Rum',
          '1 tablespoon (about 6 grams) Matcha Powder (culinary grade)',
          '1 ounce (30 ml) Freshly squeezed lime juice',
          '1/2 ounce (15 ml) Simple Syrup',
          '8-10 Fresh Mint Leaves',
          'Soda Water (club soda)',
          'Ice cubes',
          'Cucumber, parsley, blueberry (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out white rum, matcha powder, lime juice, and simple syrup.',
          'Muddle Mint and Matcha: In a cocktail shaker, add mint leaves and sifted matcha powder. Muddle gently.',
          'Add Lime Juice and Simple Syrup: Pour in lime juice and simple syrup.',
          'Add Rum and Ice: Add white rum and fill the shaker with ice cubes.',
          'Shake Vigorously: Shake the mixture vigorously for about 10-15 seconds.',
          'Strain Into Glass: Strain into a highball or Collins glass filled with ice.',
          'Top with Soda Water: Top off the glass with soda water to your liking.',
          'Stir Gently: Give the drink a gentle stir.',
          'Garnish: Garnish with cucumber, parsley, and a blueberry.'
        ]
      },
      {
        name: 'Hibiscus Gin Fizz',
        imageUrl: 'https://i.imgur.com/KubK4f7.png',
        ingredients: [
          '2 ounces (60 ml) Gin',
          '1/2 ounce (15 ml) Hibiscus Syrup (recipe below)',
          '3/4 ounce (22.5 ml) Freshly squeezed lemon juice',
          '1/2 ounce (15 ml) Simple Syrup',
          '1 Egg white',
          'Club Soda',
          'Ice cubes',
          'Dried hibiscus flowers or lemon wheel (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out gin, hibiscus syrup, lemon juice, and simple syrup.',
          'Dry Shake Egg White: In a shaker, add the egg white. Dry shake vigorously (without ice) for about 15 seconds.',
          'Add Gin, Hibiscus Syrup, Lemon Juice, and Simple Syrup: Add gin, hibiscus syrup, lemon juice, and simple syrup to the shaker with the egg white.',
          'Shake with Ice: Add ice to the shaker and shake the mixture again for about 10-15 seconds.',
          'Strain Into Glass: Strain into a chilled highball or Collins glass filled with ice.',
          'Top with Club Soda: Top off the glass with club soda to your liking.',
          'Garnish: Garnish with dried hibiscus flowers or a lemon wheel.'
        ]
      },
      {
        name: 'Smoked Rosemary Whiskey Sour',
        imageUrl: 'https://i.imgur.com/sqGtpLw.png',
        ingredients: [
          '2 ounces (60 ml) Bourbon or Rye Whiskey',
          '3/4 ounce (22.5 ml) Freshly squeezed lemon juice',
          '1/2 ounce (15 ml) Simple Syrup',
          '1 Sprig of Fresh Rosemary',
          'Ice cubes',
          'Rosemary sprig and lemon wheel (for garnish)',
          'Smoking gun or wood chips for smoking (optional)'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out bourbon or rye whiskey, lemon juice, and simple syrup.',
          'Smoked Rosemary Infusion:',
          '- If you have a smoking gun or wood chips, infuse smoke into the shaker with rosemary.',
          '- Alternatively, muddle the rosemary in the shaker if not smoking.',
          'Add Whiskey, Lemon Juice, and Simple Syrup: Add whiskey, lemon juice, and simple syrup to the shaker.',
          'Shake with Ice: Fill the shaker with ice cubes and shake the mixture for about 10-15 seconds.',
          'Strain Into Glass: Strain into a rocks glass filled with ice.',
          'Garnish and Smoke (if not smoking): Garnish with a rosemary sprig and a lemon wheel. If not smoking, present the cocktail under a glass cloche to capture the smoky aroma.',
          'Optional Variation (Advanced): For a more intense smoky flavor, you can float a small amount of smoky Islay Scotch on top of the drink.'
        ]
      },
      {
        name: 'Turmeric Margarita',
        imageUrl: 'https://i.imgur.com/0maHYjd.png',
        ingredients: [
          '2 ounces (60 ml) Tequila (blanco or reposado)',
          '3/4 ounce (22.5 ml) Freshly squeezed lime juice',
          '1/2 ounce (15 ml) Triple Sec or orange liqueur',
          '1/2 ounce (15 ml) Turmeric Simple Syrup (recipe below)',
          'Ice cubes',
          'Salt (for rimming, optional)',
          'Lime wheel or wedge (for garnish)'
        ],
        instructions: [
          'Prepare the Glass (Optional): Rim the glass with salt if desired.',
          'Prepare the Ingredients: Measure out tequila, lime juice, triple sec or orange liqueur, and turmeric simple syrup.',
          'Combine Ingredients: In a shaker, add tequila, lime juice, triple sec or orange liqueur, and turmeric simple syrup.',
          'Add Ice: Fill the shaker with ice cubes.',
          'Shake Vigorously: Shake the mixture vigorously for about 10-15 seconds.',
          'Strain Into Glass: Strain into a rocks glass filled with ice.',
          'Garnish: Garnish with a lime wheel or wedge on the rim of the glass.',
          'Optional Variation (Advanced): For an extra layer of flavor, add a small pinch of black pepper or a slice of fresh turmeric as a garnish.'
        ]
      },
      {
        name: 'Cucumber Basil Gin Smash',
        imageUrl: 'https://i.imgur.com/mbFc1ze.png',
        ingredients: [
          '2 ounces (60 ml) Gin',
          '1/2 Lime, cut into wedges',
          '1/4 cup Fresh Basil leaves',
          '1/4 Medium-sized Cucumber, sliced',
          '1 ounce (30 ml) Simple Syrup',
          'Ice cubes',
          'Soda Water (club soda)',
          'Cucumber slices and basil leaves (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out gin, lime, basil leaves, cucumber, and simple syrup.',
          'Muddle Lime, Basil, and Cucumber: In a cocktail shaker, add lime wedges, basil leaves, and cucumber slices. Muddle gently.',
          'Add Gin and Simple Syrup: Add gin and simple syrup to the shaker.',
          'Add Ice: Fill the shaker with ice cubes.',
          'Shake Vigorously: Shake the mixture vigorously for about 10-15 seconds.',
          'Strain Into Glass: Strain into a rocks glass or a short tumbler filled with ice.',
          'Top with Soda Water: Top off the glass with soda water to your liking.',
          'Stir Gently: Give the drink a gentle stir.',
          'Garnish: Garnish with cucumber slices and fresh basil leaves.'
        ]
      }
      {
        name: 'Blueberry Lavender Vodka Lemonade',
        imageUrl: 'https://i.imgur.com/MLFtE40.png',
        ingredients: [
          '2 ounces (60 ml) Vodka',
          '1/4 cup Fresh Blueberries',
          '1 tablespoon Dried Culinary Lavender',
          '2 ounces (60 ml) Freshly squeezed Lemon Juice',
          '1 ounce (30 ml) Lavender Simple Syrup (recipe below)',
          '4 ounces (120 ml) Chilled Lemonade',
          'Ice cubes',
          'Fresh lavender sprig and blueberries (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out vodka, fresh blueberries, dried culinary lavender, lemon juice, lavender simple syrup, and chilled lemonade.',
          'Muddle Blueberries and Lavender: In a shaker, add fresh blueberries and crushed dried lavender. Muddle gently.',
          'Add Vodka, Lemon Juice, Simple Syrup, and Ice: Add vodka, lemon juice, lavender simple syrup, and ice cubes to the shaker.',
          'Shake Vigorously: Shake the mixture vigorously for about 10-15 seconds.',
          'Strain Into Glass: Strain into a short glass or a Collins glass filled with ice.',
          'Top with Chilled Lemonade: Top off the glass with 4 ounces (120 ml) of chilled lemonade.',
          'Stir Gently: Give the drink a gentle stir to mix the lemonade with the other ingredients.',
          'Garnish: Garnish with a fresh lavender sprig and a few blueberries.',
          'Optional Variation (Advanced): For an extra burst of blueberry flavor, you can add a small amount of blueberry liqueur to the cocktail.'
        ]
      },
      {
        name: 'Coconut Ginger Caipirinha',
        imageUrl: 'https://i.imgur.com/HcNQqUZ.png',
        ingredients: [
          '2 ounces (60 ml) Cachaça',
          '1 tablespoon Fresh Ginger, finely grated',
          '2 teaspoons Coconut Sugar',
          '1/2 Lime, cut into wedges',
          '1 ounce (30 ml) Coconut Water',
          'Ice cubes',
          'Coconut flakes and lime wheel (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out cachaça, fresh ginger, coconut sugar, lime, and coconut water.',
          'Muddle Ginger and Lime: In a mixing glass or a shaker, add freshly grated ginger, lime wedges, and coconut sugar. Muddle gently.',
          'Add Cachaça and Coconut Water: Add cachaça and coconut water to the mixing glass or shaker.',
          'Add Ice: Fill the mixing glass or shaker with ice cubes. This will chill the ingredients as you mix.',
          'Shake or Stir: Shake the mixture vigorously for about 10 seconds if you prefer a slightly frothy texture, or stir well with ice if you want a smoother cocktail.',
          'Strain Into Glass: Strain the mixture into a rocks glass or an old-fashioned glass filled with ice.',
          'Garnish: Garnish with coconut flakes on top and a lime wheel on the rim of the glass.',
          'Optional Variation (Advanced): For added coconut flavor, you can float a small amount of coconut cream on top of the drink by pouring it gently over the back of a spoon.'
        ]
      },
      {
        name: 'Saffron-infused Gin and Tonic',
        imageUrl: 'https://i.imgur.com/oJdJSev.png',
        ingredients: [
          '2 ounces (60 ml) Saffron-infused Gin (recipe below)',
          '1/2 ounce (15 ml) Simple Syrup (optional, adjust to taste)',
          'Tonic Water',
          'Ice cubes',
          'Orange peel or saffron threads (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out saffron-infused gin. If desired, prepare simple syrup and measure out 1/2 ounce (15 ml) if you want a sweeter drink.',
          'Fill Glass with Ice: Fill a highball glass or a Copa glass with ice cubes.',
          'Pour in Saffron-infused Gin: Pour the measured saffron-infused gin over the ice in the glass.',
          'Add Simple Syrup (Optional): If you prefer a sweeter Gin and Tonic, you can add the optional 1/2 ounce (15 ml) of simple syrup. Adjust the amount based on your sweetness preference.',
          'Top with Tonic Water: Fill the glass with tonic water, leaving some space at the top for garnish.',
          'Stir Gently: Give the drink a gentle stir to mix the saffron-infused gin, simple syrup (if added), and tonic water.',
          'Garnish: Garnish the Saffron-infused Gin and Tonic with a twist of orange peel or a few saffron threads on top.',
          'Optional Variation (Advanced): For an extra layer of flavor, you can add a splash of orange bitters or a few drops of orange blossom water.'
        ]
      },
      {
        name: 'Beetroot Bourbon Sour',
        imageUrl: 'https://i.imgur.com/bipkv2c.png',
        ingredients: [
          '2 ounces (60 ml) Bourbon',
          '1 ounce (30 ml) Fresh Beetroot Juice',
          '3/4 ounce (22.5 ml) Freshly squeezed Lemon Juice',
          '1/2 ounce (15 ml) Simple Syrup',
          '1 Egg White',
          'Ice cubes',
          'Beetroot chip (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out bourbon, fresh beetroot juice, lemon juice, simple syrup, and separate one egg white.',
          'Dry Shake Egg White: In a shaker, add the egg white. Dry shake vigorously (without ice) for about 15 seconds.',
          'Add Bourbon, Beetroot Juice, Lemon Juice, and Simple Syrup: Add bourbon, beetroot juice, lemon juice, and simple syrup to the shaker with the egg white.',
          'Shake with Ice: Add ice to the shaker and shake the mixture again for about 10-15 seconds.',
          'Strain Into Glass: Strain the mixture into a rocks glass or a whiskey sour glass filled with ice.',
          'Garnish: Garnish with a thin beetroot chip.',
          'Optional Variation (Advanced): For a hint of spice, you can add a small pinch of ground cinnamon or a few drops of aromatic bitters.'
        ]
      },
      {
        name: 'Spicy Mango Jalapeño Margarita',
        imageUrl: 'https://i.imgur.com/h3WWeL6.png',
        ingredients: [
          '2 ounces (60 ml) Tequila (blanco or reposado)',
          '1 ounce (30 ml) Fresh Mango Puree',
          '3/4 ounce (22.5 ml) Freshly squeezed Lime Juice',
          '1/2 ounce (15 ml) Triple Sec or Orange Liqueur',
          '1/2 ounce (15 ml) Agave Syrup',
          '1-2 slices of Fresh Jalapeño (adjust to taste)',
          'Tajín or Chili Salt (for rimming, optional)',
          'Ice cubes',
          'Mango slice and Jalapeño slice (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out tequila, fresh mango puree, lime juice, triple sec or orange liqueur, agave syrup, and slice 1-2 pieces of fresh jalapeño.',
          'Rim the Glass (Optional): If desired, rim the glass with Tajín or chili salt.',
          'Muddle Jalapeño: In a shaker, add the fresh jalapeño slices and muddle to release the spiciness.',
          'Add Tequila, Mango Puree, Lime Juice, Triple Sec, and Agave Syrup: Add the measured tequila, mango puree, lime juice, triple sec or orange liqueur, and agave syrup to the shaker.',
          'Add Ice: Fill the shaker with ice cubes.',
          'Shake Vigorously: Shake the mixture vigorously for about 10-15 seconds.',
          'Strain Into Glass: Strain the mixture into a rocks glass or a margarita glass filled with ice.',
          'Garnish: Garnish with a slice of fresh mango and a thin jalapeño slice on the rim of the glass.',
          'Optional Variation (Advanced): For an extra layer of spice, you can infuse the tequila with jalapeño slices beforehand.'
        ]
      }
      {
        name: 'Elderflower Paloma',
        imageUrl: 'https://i.imgur.com/fTGbJ8f.png',
        ingredients: [
          '2 ounces (60 ml) Tequila (blanco or reposado)',
          '1/2 ounce (15 ml) Elderflower Liqueur (such as St-Germain)',
          '3/4 ounce (22.5 ml) Freshly squeezed Grapefruit Juice',
          '1/2 ounce (15 ml) Freshly squeezed Lime Juice',
          '1/2 ounce (15 ml) Agave Syrup',
          'Grapefruit Soda (to top)',
          'Ice cubes',
          'Grapefruit slice and edible flowers (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out tequila, elderflower liqueur, grapefruit juice, lime juice, and agave syrup.',
          'Prepare the Glass: Fill a highball glass with ice cubes, salt rim.',
          'Add Tequila, Elderflower Liqueur, Grapefruit Juice, Lime Juice, and Agave Syrup: In a shaker, combine tequila, elderflower liqueur, grapefruit juice, lime juice, and agave syrup.',
          'Shake with Ice: Add ice to the shaker and shake the mixture vigorously for about 10-15 seconds. This will chill the ingredients and blend the flavors.',
          'Strain Into Glass: Strain the mixture into the prepared highball glass filled with ice.',
          'Top with Grapefruit Soda: Top off the glass with grapefruit soda. Adjust the amount based on your preference for effervescence.',
          'Stir Gently: Give the drink a gentle stir to mix the soda with the other ingredients.',
          'Garnish: Garnish with a slice of grapefruit and edible flowers for an elegant touch.',
          'Optional Variation (Advanced): For an extra layer of floral complexity, you can add a few drops of lavender bitters to the cocktail.'
        ]
      },
      {
        name: 'Raspberry Thyme Prosecco Smash',
        imageUrl: 'https://i.imgur.com/9n51pEH.png',
        ingredients: [
          '4-6 Fresh Raspberries',
          '2 Sprigs of Fresh Thyme',
          '1 ounce (30 ml) Raspberry Syrup (recipe below)',
          '1/2 ounce (15 ml) Freshly squeezed Lemon Juice',
          '2 ounces (60 ml) Vodka',
          'Ice cubes',
          'Prosecco (to top)',
          'Fresh raspberries and thyme sprig (for garnish)'
        ],
        instructions: [
          'Raspberry Syrup: Prepare the Syrup: In a saucepan, combine fresh raspberries, water, and granulated sugar. Bring the mixture to a simmer over medium heat, stirring until the sugar dissolves. Simmer for about 5-7 minutes, mashing the raspberries to release their juices. Remove from heat and let it cool. Strain the syrup to remove raspberry seeds and pulp. Discard the solids and store the raspberry syrup in a sealed container in the refrigerator.',
          'Prepare the Ingredients: In a shaker, add fresh raspberries and sprigs of fresh thyme. Measure out raspberry syrup, freshly squeezed lemon juice, and vodka.',
          'Muddle Raspberries and Thyme: Use a muddler to gently muddle the fresh raspberries and thyme in the shaker, releasing their flavors.',
          'Add Raspberry Syrup, Lemon Juice, and Vodka: Add the measured raspberry syrup, freshly squeezed lemon juice, and vodka to the shaker.',
          'Add Ice: Fill the shaker with ice cubes. This will chill the ingredients and dilute the mixture as you shake.',
          'Shake Vigorously: Shake the mixture vigorously for about 10-15 seconds. This will incorporate the flavors and chill the ingredients.',
          'Strain Into Glass: Strain the mixture into a rocks glass or a short tumbler filled with ice. You can use a Hawthorne strainer or any available strainer.',
          'Top with Prosecco: Top off the glass with Prosecco. You can adjust the amount based on your preference for effervescence.',
          'Stir Gently: Give the drink a gentle stir to mix the Prosecco with the other ingredients.',
          'Garnish: Garnish with fresh raspberries and a thyme sprig.'
        ]
      },
      {
        name: 'Chai Spiced Rum Punch',
        imageUrl: 'https://i.imgur.com/oCFzm9C.png',
        ingredients: [
          '2 cups Strongly Brewed Chai Tea, cooled',
          '1 cup Dark Rum',
          '1/2 cup Freshly squeezed Orange Juice',
          '1/4 cup Honey',
          '1/4 cup Freshly squeezed Lemon Juice',
          '1 Cinnamon Stick',
          '4-6 Whole Cloves',
          '1 Orange, thinly sliced',
          '1 Lemon, thinly sliced',
          'Ice cubes',
          'Sparkling Water or Ginger Beer (to top)',
          'Orange slices, lemon slices, and cinnamon sticks (for garnish)'
        ],
        instructions: [
          'Prepare Chai Tea: Brew a strong pot of chai tea and let it cool to room temperature.',
          'Prepare the Ingredients: Measure out chai tea, dark rum, freshly squeezed orange juice, honey, and freshly squeezed lemon juice. Gather cinnamon stick, whole cloves, and slices of orange and lemon.',
          'Combine Ingredients in a Punch Bowl: In a punch bowl, combine the brewed chai tea, dark rum, freshly squeezed orange juice, honey, and freshly squeezed lemon juice.',
          'Add Spices and Citrus Slices: Add the cinnamon stick, whole cloves, and slices of orange and lemon to the punch bowl.',
          'Chill: Place the punch bowl in the refrigerator and let the mixture chill for at least 2 hours, allowing the flavors to meld.',
          'Add Ice: Before serving, add ice cubes to the punch bowl to chill the drink further.',
          'Top with Sparkling Water or Ginger Beer: Just before serving, top the punch with sparkling water or ginger beer for a fizzy element. Adjust the amount based on your preference for effervescence.',
          'Stir Gently: Give the punch a gentle stir to incorporate the sparkling water or ginger beer.',
          'Garnish: Garnish with orange slices, lemon slices, and additional cinnamon sticks.',
          'Serve: Ladle the Chai Spiced Rum Punch into individual glasses and serve.'
        ]
    },
      {
        name: 'Blackberry Sage Gin Fizz',
        imageUrl: 'https://i.imgur.com/93GxmGj.png',
        ingredients: [
          '6-8 Fresh Blackberries',
          '2-3 Fresh Sage Leaves',
          '2 ounces (60 ml) Gin',
          '3/4 ounce (22.5 ml) Simple Syrup',
          '1/2 ounce (15 ml) Freshly squeezed Lemon Juice',
          '1 Egg White',
          'Soda Water',
          'Ice cubes',
          'Blackberries and sage leaves (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients: In a mixing glass or cocktail shaker, add blackberries and sage leaves. Measure out gin, simple syrup, lemon juice, and separate one egg white.',
          'Muddle Blackberries and Sage: Use a muddler to gently muddle the blackberries and sage leaves.',
          'Add Gin, Simple Syrup, Lemon Juice, and Egg White: Add the measured ingredients to the shaker.',
          'Dry Shake: Shake the mixture vigorously without ice for about 15-20 seconds.',
          'Add Ice and Shake: Add ice cubes and shake again for 10-15 seconds.',
          'Strain Into Glass: Strain into a highball glass filled with ice.',
          'Top with Soda Water: Add soda water to your liking.',
          'Stir Gently: Stir to mix.',
          'Garnish: Garnish with blackberries and a sage leaf.'
        ]
      },
      {
        name: 'Cucumber Mint Gin Tonic',
        imageUrl: 'https://i.imgur.com/jTo5EHX.png',
        ingredients: [
          '2 ounces (60 ml) Gin',
          '4-6 Fresh Mint Leaves',
          '4-6 Thin Cucumber Slices',
          '1/2 ounce (15 ml) Simple Syrup',
          '1/2 ounce (15 ml) Freshly squeezed Lime Juice',
          'Tonic Water',
          'Ice cubes',
          'Cucumber ribbon and mint sprig or rosemary (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients: Measure out gin, mint leaves, cucumber slices, simple syrup, and lime juice.',
          'Muddle Mint and Cucumber: In a glass or shaker, muddle mint leaves and cucumber slices.',
          'Add Gin, Simple Syrup, and Lime Juice: Add the measured ingredients to the glass or shaker.',
          'Add Ice and Stir/Shake: Fill with ice cubes and stir or shake for 10 seconds.',
          'Strain Into Glass: Strain into a highball glass filled with ice.',
          'Top with Tonic Water: Add tonic water to your liking.',
          'Stir Gently: Stir to mix.',
          'Garnish: Garnish with a cucumber ribbon and a sprig of fresh mint.'
        ]
      },
      {
        name: 'Fig and Honey Bourbon Fizz',
        imageUrl: 'https://i.imgur.com/8dkIJLr.png',
        ingredients: [
          '2 ounces (60 ml) Bourbon',
          '2 Fresh Figs, quartered',
          '1/2 ounce (15 ml) Honey Syrup',
          '1/2 ounce (15 ml) Freshly squeezed Lemon Juice',
          'Club Soda',
          'Ice cubes',
          'Fresh fig slices and fresh thyme (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients: In a mixing glass or cocktail shaker, add quartered fresh figs. Measure out bourbon, honey syrup, and lemon juice.',
          'Muddle Figs: Use a muddler to gently muddle the fresh figs.',
          'Add Bourbon, Honey Syrup, and Lemon Juice: Add the measured ingredients to the shaker.',
          'Add Ice and Shake: Fill with ice cubes and shake vigorously for 10-15 seconds.',
          'Strain Into Glass: Strain into a highball glass filled with ice.',
          'Top with Club Soda: Add club soda to your liking.',
          'Stir Gently: Stir to mix.',
          'Garnish: Garnish with fresh fig slices and some fresh thyme.'
        ]
      },
      {
        name: 'Vanilla Chai White Russian',
        imageUrl: 'https://i.imgur.com/WPY9ADs.png',
        ingredients: [
          '1 1/2 ounces (45 ml) Vodka',
          '1/2 ounce (15 ml) Coffee Liqueur (e.g., Kahlúa)',
          '1/2 ounce (15 ml) Vanilla Chai Syrup',
          '1 ounce (30 ml) Heavy Cream',
          'Ice cubes',
          'Ground cinnamon or cinnamon stick (for garnish)',
          'Optional vanilla caramel drizzle'
        ],
        instructions: [
          'Prepare the Ingredients: In a mixing glass or shaker, add vodka, coffee liqueur, and vanilla chai syrup.',
          'Add Ice and Stir/Shake: Fill with ice cubes and stir or shake for 10 seconds.',
          'Strain Into Glass: Strain into a rocks glass filled with ice.',
          'Float Heavy Cream: Slowly pour heavy cream over the back of a spoon to create a floating layer.',
          'Garnish: Garnish with ground cinnamon or a cinnamon stick. Optional: drizzle with vanilla caramel.'
        ]
      }                                                                                                                                                      
      {
        name: 'Pomegranate Rosemary Sparkler',
        imageUrl: 'https://i.imgur.com/fPheb82.png',
        ingredients: [
          '1 1/2 ounces (45 ml) Gin',
          '1 ounce (30 ml) Pomegranate Juice',
          '1/2 ounce (15 ml) Simple Syrup',
          '1/2 ounce (15 ml) Freshly squeezed Lemon Juice',
          'Sparkling Water',
          'Ice cubes',
          'Fresh Pomegranate Arils (seeds)',
          'Fresh Rosemary Sprig (for garnish)'
        ],
        instructions: [
          'In a mixing glass or shaker, add gin, pomegranate juice, simple syrup, and freshly squeezed lemon juice.',
          'Add ice cubes and stir or shake for about 10 seconds.',
          'Strain the mixture into a wine glass or highball glass filled with ice.',
          'Top off with sparkling water.',
          'Stir gently and garnish with fresh pomegranate arils and a sprig of fresh rosemary.'
        ]
      },
      {
        name: 'Ginger Lemongrass Caipiroska',
        imageUrl: 'https://i.imgur.com/69yWSQy.png',
        ingredients: [
          '2 ounces (60 ml) Vodka',
          '1 tablespoon Fresh Lemongrass, finely chopped',
          '1 tablespoon Fresh Ginger, grated',
          '1 tablespoon Simple Syrup',
          '1/2 Lime, cut into wedges',
          'Ice cubes',
          'Soda Water (optional)',
          'Lemongrass stalk and lime wheel (for garnish)'
        ],
        instructions: [
          'In a mixing glass or shaker, add vodka, finely chopped lemongrass, grated ginger, and simple syrup.',
          'Muddle lemongrass and ginger in the mixture.',
          'Squeeze the juice of half a lime and add the lime wedges to the mixture.',
          'Add ice cubes and shake or stir for about 10-15 seconds.',
          'Strain the mixture into a rocks glass filled with ice.',
          'Optional: Top off with soda water and garnish with a lemongrass stalk and lime wheel.'
        ]
      },
      {
        name: 'Japanese Yuzu Sour',
        imageUrl: 'https://i.imgur.com/dl60W2x.png',
        ingredients: [
          '2 ounces (60 ml) Japanese Whisky',
          '1 ounce (30 ml) Yuzu Juice',
          '1/2 ounce (15 ml) Simple Syrup',
          '1/2 ounce (15 ml) Egg White',
          'Ice cubes',
          'Dried lemon with rosemary and cinnamon (for garnish)'
        ],
        instructions: [
          'In a mixing glass or shaker, add Japanese whisky, yuzu juice, simple syrup, and egg white.',
          'Dry shake vigorously for 15-20 seconds.',
          'Add ice cubes and shake again for 10-15 seconds.',
          'Strain the mixture into a rocks glass filled with ice.',
          'Garnish with dried lemon, rosemary, and cinnamon.'
        ]
      }
      {
        name: 'Brazilian Caipirinha',
        imageUrl: 'https://i.imgur.com/XFY6y23.png',
        ingredients: [
          '2 ounces (60 ml) Cachaça (Brazilian sugar cane spirit)',
          '1 Lime, cut into wedges',
          '2 teaspoons White Sugar or sugarcane sugar',
          'Ice cubes',
          'Lime wheel (for garnish)'
        ],
        instructions: [
          'Cut a lime into wedges.',
          'In a rocks glass or a similar short glass, add the lime wedges.',
          'Sprinkle 2 teaspoons of white sugar over the lime wedges.',
          'Use a muddler to gently muddle the lime wedges and sugar.',
          'Pour the measured cachaça over the muddled lime and sugar.',
          'Stir the mixture gently with a spoon.',
          'Fill the glass with ice cubes.',
          'Stir again and garnish with a lime wheel.'
        ]
      },
      {
        name: 'Mexican Mezcal Mule',
        imageUrl: 'https://i.imgur.com/HWL6NfY.png',
        ingredients: [
          '2 ounces (60 ml) Mezcal',
          '1/2 ounce (15 ml) Fresh Lime Juice',
          '1/2 ounce (15 ml) Agave Syrup',
          'Ginger Beer',
          'Ice cubes',
          'Lime wheel and a slice of jalapeño (for garnish)'
        ],
        instructions: [
          'Measure out 2 ounces (60 ml) of mezcal.',
          'Squeeze enough limes to yield 1/2 ounce (15 ml) of fresh lime juice.',
          'Measure out 1/2 ounce (15 ml) of agave syrup.',
          'In a copper mug or highball glass, add the measured mezcal, fresh lime juice, and agave syrup.',
          'Fill the glass with ice cubes.',
          'Top off with ginger beer and stir gently.',
          'Garnish with a lime wheel and a slice of jalapeño.'
        ]
      },
      {
        name: 'Spanish Sangria',
        imageUrl: 'https://i.imgur.com/jB79orJ.png',
        ingredients: [
          '1 bottle (750 ml) Red Wine (Spanish wine like Tempranillo or Garnacha)',
          '1 Orange, thinly sliced',
          '1 Lemon, thinly sliced',
          '2 tablespoons Sugar',
          '1 shot (1.5 ounces or 45 ml) Brandy',
          '1 cup (240 ml) Orange Juice',
          '1 cup (240 ml) Club Soda',
          'Ice cubes'
        ],
        instructions: [
          'In a large pitcher, pour the entire bottle of red wine and add sugar.',
          'Pour in the shot of brandy and add the thinly sliced orange and lemon.',
          'Place the pitcher in the refrigerator and let the mixture chill for at least 2 hours or overnight.',
          'Before serving, add the measured orange juice and club soda to the chilled sangria. Stir gently to combine.',
          'Fill glasses with ice cubes and pour the sangria over the ice.',
          'Garnish with additional slices of orange and lemon.'
        ]
      },
      {
        name: 'French 75',
        imageUrl: 'https://i.imgur.com/BBzRhUE.png',
        ingredients: [
          '2 ounces (60 ml) Gin',
          '1 ounce (30 ml) Freshly squeezed Lemon Juice',
          '1/2 ounce (15 ml) Simple Syrup',
          'Chilled Champagne or Sparkling Wine',
          'Ice cubes',
          'Lemon twist (for garnish)'
        ],
        instructions: [
          'Measure out 2 ounces (60 ml) of gin and squeeze enough lemons to yield 1 ounce (30 ml) of freshly squeezed lemon juice.',
          'In a cocktail shaker, add the measured gin, freshly squeezed lemon juice, and simple syrup. Fill with ice cubes.',
          'Shake the mixture vigorously for about 10-15 seconds.',
          'Strain the shaken mixture into a chilled champagne flute or a Collins glass.',
          'Top off with chilled champagne or sparkling wine.',
          'Garnish with a twist of lemon.'
        ]
      }
      {
        name: 'Irish Coffee Martini',
        imageUrl: 'https://i.imgur.com/F4NqjL9.png',
        ingredients: [
          '2 ounces (60 ml) Irish Whiskey',
          '1 ounce (30 ml) Irish Cream Liqueur (e.g., Baileys)',
          '1/2 ounce (15 ml) Cold Brew Coffee',
          '1/2 ounce (15 ml) Simple Syrup',
          'Ice cubes',
          'Coffee beans and dark chocolate powder (for garnish)'
        ],
        instructions: [
          'Measure out 2 ounces (60 ml) of Irish whiskey.',
          'Measure out 1 ounce (30 ml) of Irish cream liqueur (e.g., Baileys).',
          'Measure out 1/2 ounce (15 ml) of cold brew coffee.',
          'Prepare simple syrup if not already available.',
          'In a cocktail shaker, add the measured Irish whiskey, Irish cream liqueur, cold brew coffee, and simple syrup.',
          'Fill the shaker with ice cubes. Shake the mixture vigorously for about 10-15 seconds.',
          'Strain the shaken mixture into a chilled martini glass. Garnish with coffee beans and dust dark chocolate powder.'
        ]
      },
      {
        name: 'Caribbean Rum Punch',
        imageUrl: 'https://i.imgur.com/sq7KT8X.png',
        ingredients: [
          '2 cups (480 ml) Pineapple Juice',
          '1 cup (240 ml) Orange Juice',
          '1 cup (240 ml) Dark Rum',
          '1/4 cup (60 ml) Coconut Cream',
          '1/4 cup (60 ml) Lime Juice (freshly squeezed)',
          '2 tablespoons Grenadine',
          '1-2 tablespoons Simple Syrup (adjust to taste)',
          'Orange slices, Pineapple slices, and Maraschino cherries (for garnish)',
          'Ice cubes'
        ],
        instructions: [
          'Measure out 2 cups (480 ml) of pineapple juice.',
          'Measure out 1 cup (240 ml) of orange juice.',
          'Measure out 1 cup (240 ml) of dark rum.',
          'Measure out 1/4 cup (60 ml) of coconut cream.',
          'Squeeze enough limes to yield 1/4 cup (60 ml) of freshly squeezed lime juice.',
          'Measure out 2 tablespoons of grenadine.',
          'Prepare simple syrup if not already available.',
          'In a large pitcher, combine the pineapple juice, orange juice, dark rum, coconut cream, freshly squeezed lime juice, grenadine, and simple syrup.',
          'Stir well and refrigerate the punch for at least 2 hours.',
          'Fill glasses with ice cubes, pour the punch, and garnish with orange slices, pineapple slices, and a maraschino cherry.'
        ]
      },
      {
        name: 'Thai Basil Chili Margarita',
        imageUrl: 'https://i.imgur.com/JBJj9fh.png',
        ingredients: [
          '2 ounces (60 ml) Tequila',
          '1 ounce (30 ml) Triple Sec or Cointreau',
          '1 ounce (30 ml) Fresh Lime Juice',
          '1/2 ounce (15 ml) Thai Basil Chili Syrup (recipe below)',
          'Chili Salt (for rimming the glass)',
          'Thai basil leaves and chili slices (for garnish)',
          'Ice cubes'
        ],
        instructions: [
          'Rim a rocks glass with chili salt by rubbing the rim with a lime wedge and dipping it into chili salt.',
          'Measure out 2 ounces (60 ml) of tequila.',
          'Measure out 1 ounce (30 ml) of triple sec or Cointreau.',
          'Squeeze enough limes to yield 1 ounce (30 ml) of fresh lime juice.',
          'In a shaker, add the measured tequila, triple sec, fresh lime juice, and Thai Basil Chili Syrup.',
          'Fill the shaker with ice cubes and shake the mixture vigorously for about 10-15 seconds.',
          'Strain the shaken mixture into the prepared rocks glass and garnish with Thai basil leaves and slices of chili.'
        ]
      },
      {
        name: 'Cuban Mojito',
        imageUrl: 'https://i.imgur.com/xw2i1HP.png',
        ingredients: [
          '2 ounces (60 ml) White Rum',
          '1 ounce (30 ml) Fresh Lime Juice',
          '2 teaspoons Sugar (adjust to taste)',
          '8-10 Fresh Mint Leaves',
          'Soda Water (Club Soda)',
          'Ice cubes',
          'Lime wheel and Mint sprig (for garnish)'
        ],
        instructions: [
          'Measure out 2 ounces (60 ml) of white rum.',
          'Squeeze enough limes to yield 1 ounce (30 ml) of fresh lime juice.',
          'Measure out 2 teaspoons of sugar (adjust to taste).',
          'Pick 8-10 fresh mint leaves.',
          'In a glass or a cocktail shaker, add the fresh mint leaves and sugar. Use a muddler to gently muddle the mint leaves with the sugar.',
          'Pour the freshly squeezed lime juice into the glass or shaker with the muddled mint and sugar.',
          'Add the measured white rum and fill the glass or shaker with ice cubes.',
          'Shake or stir well and strain into a highball glass filled with ice.',
          'Top off with soda water, stir gently, and garnish with a lime wheel and a sprig of fresh mint.'
        ]
      },
      {
        name: 'Aperol Spritz',
        imageUrl: 'https://i.imgur.com/RUo0R1M.png',
        ingredients: [
          '3 ounces (90 ml) Aperol',
          '2 ounces (60 ml) Prosecco',
          '1 ounce (30 ml) Soda Water',
          'Orange slice (for garnish)',
          'Ice cubes'
        ],
        instructions: [
          'Measure out 3 ounces (90 ml) of Aperol.',
          'Measure out 2 ounces (60 ml) of Prosecco.',
          'Measure out 1 ounce (30 ml) of soda water.',
          'Fill a large wine glass with ice cubes.',
          'Pour the measured Aperol over the ice, followed by the Prosecco and soda water.',
          'Stir gently and garnish with a slice of orange.'
        ]
      } 
      {
        name: 'Argentinian Fernet and Cola',
        imageUrl: 'https://i.imgur.com/pR03IMI.png',
        ingredients: [
          '2 ounces (60 ml) Fernet Branca',
          'Cola (to fill)',
          'Ice cubes',
          'Lemon wedge or twist (for garnish)'
        ],
        instructions: [
          'Measure out 2 ounces (60 ml) of Fernet Branca.',
          'Fill a highball glass with ice cubes.',
          'Pour the measured Fernet Branca over the ice in the highball glass.',
          'Fill the glass with cola to your desired level.',
          'Give the Fernet and Cola a gentle stir to mix the ingredients together.',
          'Garnish the drink with a lemon wedge or twist.'
        ]
      },
      {
        name: 'Cumin Honey Tequila Sunrise',
        imageUrl: 'https://i.imgur.com/xI9FcrH.png',
        ingredients: [
          '2 ounces (60 ml) Tequila',
          '4 ounces (120 ml) Orange Juice',
          '1/2 ounce (15 ml) Grenadine',
          '1/2 teaspoon Ground Cumin',
          '1 teaspoon Honey',
          'Orange slice and maraschino cherry (for garnish)',
          'Ice cubes'
        ],
        instructions: [
          'Measure out 2 ounces (60 ml) of tequila.',
          'Measure out 4 ounces (120 ml) of orange juice.',
          'Measure out 1/2 ounce (15 ml) of grenadine.',
          'Measure out 1/2 teaspoon of ground cumin.',
          'Measure out 1 teaspoon of honey.',
          'In a small bowl, combine the ground cumin and honey to create a cumin honey syrup.',
          'Fill a highball glass with ice cubes.',
          'Pour the measured tequila and orange juice over the ice.',
          'Add the cumin honey syrup to the glass and stir gently.',
          'Slowly pour the grenadine over the back of a spoon to create a layered effect.',
          'Garnish the Cumin Honey Tequila Sunrise with an orange slice and a maraschino cherry.'
        ]
      },
      {
        name: 'Jamaican Dark \'n\' Stormy',
        imageUrl: 'https://i.imgur.com/OiDAOKh.png',
        ingredients: [
          '2 ounces (60 ml) Jamaican Dark Rum',
          'Ginger Beer',
          '1/2 ounce (15 ml) Fresh Lime Juice',
          'Lime wedge (for garnish)',
          'Ice cubes'
        ],
        instructions: [
          'Measure out 2 ounces (60 ml) of Jamaican dark rum.',
          'Squeeze enough limes to yield 1/2 ounce (15 ml) of fresh lime juice.',
          'Fill a highball glass with ice cubes.',
          'Pour the measured Jamaican dark rum over the ice.',
          'Top off the glass with ginger beer.',
          'Squeeze fresh lime juice into the glass and stir gently.',
          'Garnish the Dark \'n\' Stormy with a lime wedge on the rim of the glass.'
        ]
      },
      {
        name: 'Greek Ouzo Lemonade',
        imageUrl: 'https://i.imgur.com/9e3oxoQ.png',
        ingredients: [
          '2 ounces (60 ml) Ouzo',
          '1 ounce (30 ml) Fresh Lemon Juice',
          '1/2 ounce (15 ml) Simple Syrup',
          'Sparkling Water',
          'Lemon slices and fresh mint leaves (for garnish)',
          'Ice cubes'
        ],
        instructions: [
          'Measure out 2 ounces (60 ml) of ouzo.',
          'Squeeze enough lemons to yield 1 ounce (30 ml) of fresh lemon juice.',
          'Prepare simple syrup if not already available.',
          'Fill a highball glass with ice cubes.',
          'Pour the measured ouzo over the ice in the highball glass.',
          'Pour the freshly squeezed lemon juice into the glass.',
          'Add the simple syrup to the glass and top off with sparkling water.',
          'Give the Greek Ouzo Lemonade a gentle stir and garnish with lemon slices and fresh mint leaves.'
        ]
      },
      {
        name: 'German Radler Cocktail',
        imageUrl: 'https://i.imgur.com/DVA7hio.png',
        ingredients: [
          '1/2 cup (120 ml) Light Beer (Lager)',
          '1/2 cup (120 ml) Sparkling Lemonade',
          '1 ounce (30 ml) Vodka',
          '1/2 ounce (15 ml) Simple Syrup (optional, adjust to taste)',
          'Lemon wedge (for garnish)',
          'Ice cubes'
        ],
        instructions: [
          'Measure out 1/2 cup (120 ml) of light beer (Lager).',
          'Measure out 1/2 cup (120 ml) of sparkling lemonade.',
          'Measure out 1 ounce (30 ml) of vodka.',
          'Prepare simple syrup if desired, adjusting the sweetness to taste.',
          'Fill a large beer mug or highball glass with ice cubes.',
          'Pour the measured vodka over the ice in the glass.',
          'Pour the measured light beer (Lager) into the glass, filling it about halfway.',
          'Top off the glass with the measured sparkling lemonade.',
          'If desired, add simple syrup to the cocktail and stir gently.',
          'Garnish the drink with a lemon wedge on the rim of the glass.'
        ]
      }
      {
        name: 'Indian Masala Chai Martini',
        imageUrl: 'https://i.imgur.com/tHWjAfR.png',
        ingredients: [
          '2 ounces (60 ml) Chai-Infused Vodka',
          '1/2 ounce (15 ml) Simple Syrup',
          '1/2 ounce (15 ml) Vanilla Syrup',
          '1 ounce (30 ml) Heavy Cream',
          'Ice cubes',
          'Ground cinnamon or cinnamon stick or anise star (for garnish)'
        ],
        instructions: [
          'Prepare Chai-Infused Vodka (Advanced, can be done ahead of time):',
          'In a glass jar or bottle, combine 1 cup of vodka with 2-3 chai tea bags.',
          'Seal the jar or bottle and let it sit at room temperature for at least 4-6 hours, or overnight for a stronger infusion.',
          'Remove the tea bags, and the chai-infused vodka is ready to use.',
          'Prepare the Ingredients:',
          'Measure out 2 ounces (60 ml) of chai-infused vodka.',
          'Measure out 1/2 ounce (15 ml) of simple syrup.',
          'Measure out 1/2 ounce (15 ml) of vanilla syrup.',
          'Measure out 1 ounce (30 ml) of heavy cream.',
          'Fill a Shaker with Ice:',
          'Fill a cocktail shaker with ice cubes. This will chill the ingredients and help with dilution.',
          'Add Chai-Infused Vodka, Simple Syrup, Vanilla Syrup, and Heavy Cream:',
          'Add the measured chai-infused vodka, simple syrup, vanilla syrup, and heavy cream to the shaker.',
          'Shake Vigorously:',
          'Shake the mixture vigorously for about 10-15 seconds. This will mix the ingredients well and create a frothy texture.',
          'Strain Into Martini Glass:',
          'Strain the shaken mixture into a chilled martini glass. You can use a Hawthorne strainer or any available strainer.',
          'Garnish:',
          'Garnish the Indian Masala Chai Martini with a sprinkle of ground cinnamon on top or a cinnamon stick for an aromatic touch.',
          'Optional Variation (Advanced):',
          'For an extra layer of flavor, you can add a small amount of ground cardamom or nutmeg to the shaker.'
        ]
      },
      {
        name: 'Black Russian',
        imageUrl: 'https://i.imgur.com/7gwlQa5.png',
        ingredients: [
          '2 ounces (60 ml) Vodka',
          '1 ounce (30 ml) Coffee Liqueur (e.g., Kahlúa)',
          'Ice cubes'
        ],
        instructions: [
          'Prepare the Ingredients:',
          'Measure out 2 ounces (60 ml) of vodka.',
          'Measure out 1 ounce (30 ml) of coffee liqueur (e.g., Kahlúa).',
          'Fill a Rocks Glass with Ice:',
          'Fill a rocks glass with ice cubes. The Black Russian is traditionally served over ice.',
          'Pour Vodka:',
          'Pour the measured vodka over the ice in the rocks glass.',
          'Add Coffee Liqueur:',
          'Pour the measured coffee liqueur (e.g., Kahlúa) into the glass over the vodka.',
          'Stir Gently:',
          'Give the ingredients a gentle stir in the glass to combine them. The stirring helps chill the drink and mix the flavors.',
          'Optional Variation (Advanced):',
          'For a layered effect, you can pour the coffee liqueur over the back of a spoon onto the vodka, allowing it to float on top.'
        ]
      },
      {
        name: 'Austrian Hugo Cocktail',
        imageUrl: 'https://i.imgur.com/1Zwdfc2.png',
        ingredients: [
          '2 ounces (60 ml) Elderflower Liqueur (e.g., St-Germain)',
          '1 ounce (30 ml) Prosecco (or sparkling wine)',
          '1/2 ounce (15 ml) Fresh Lime Juice',
          '1-2 Fresh Mint Sprigs',
          'Soda Water (Club Soda)',
          'Ice cubes',
          'Lime slices and mint leaves (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients:',
          'Measure out 2 ounces (60 ml) of elderflower liqueur (e.g., St-Germain).',
          'Measure out 1 ounce (30 ml) of Prosecco (or sparkling wine).',
          'Squeeze enough limes to yield 1/2 ounce (15 ml) of fresh lime juice.',
          'Fill a Wine Glass with Ice:',
          'Fill a large wine glass or Hugo glass with ice cubes.',
          'Add Elderflower Liqueur:',
          'Pour the measured elderflower liqueur over the ice in the wine glass.',
          'Add Fresh Lime Juice:',
          'Add the freshly squeezed lime juice to the glass.',
          'Add Prosecco:',
          'Pour the measured Prosecco (or sparkling wine) into the glass.',
          'Add Mint Sprigs:',
          'Add 1-2 fresh mint sprigs to the glass. Lightly bruise the mint leaves by gently pressing them with a muddler or the back of a spoon to release their aromatic oils.',
          'Top with Soda Water:',
          'Top off the cocktail with soda water (club soda). You can adjust the amount based on your preference for effervescence.',
          'Stir Gently:',
          'Give the Hugo cocktail a gentle stir to mix the ingredients together.',
          'Garnish:',
          'Garnish the drink with lime slices and additional mint leaves for a fresh and vibrant presentation.',
          'Optional Variation (Advanced):',
          'For added visual appeal, you can float a few fresh berries, such as raspberries or blackberries, in the cocktail.'
        ]
      },
      {
        name: 'Portuguese Ginjinha Sour',
        imageUrl: 'https://i.imgur.com/ieWI62x.png',
        ingredients: [
          '2 ounces (60 ml) Ginjinha (Portuguese sour cherry liqueur)',
          '1 ounce (30 ml) Gin',
          '3/4 ounce (22.5 ml) Fresh Lemon Juice',
          '1/2 ounce (15 ml) Simple Syrup',
          '1 Egg White (optional, for a frothy texture)',
          'Ice cubes',
          'Maraschino cherry (for garnish) optional'
        ],
        instructions: [
          'Prepare the Ingredients:',
          'Measure out 2 ounces (60 ml) of Ginjinha.',
          'Measure out 1 ounce (30 ml) of Gin.',
          'Squeeze enough lemons to yield 3/4 ounce (22.5 ml) of fresh lemon juice.',
          'Prepare simple syrup if not already available.',
          'If using, separate the egg white from the yolk.',
          'Fill a Shaker with Ice:',
          'Fill a cocktail shaker with ice cubes. This will chill the ingredients and help with dilution.',
          'Add Ginjinha, Gin, Lemon Juice, Simple Syrup, and Egg White:',
          'Add the measured Ginjinha, Gin, fresh lemon juice, simple syrup, and egg white (if using) to the shaker.',
          'Shake Vigorously:',
          'Shake the mixture vigorously for about 15 seconds. This will emulsify the egg white (if using) and create a frothy texture.',
          'Strain Into Glass:',
          'Strain the shaken mixture into a rocks glass or a sour glass without ice. You can use a Hawthorne strainer or any available strainer.',
          'Garnish:',
          'Garnish the Ginjinha Sour with a maraschino cherry. (Optional)',
          'Optional Variation (Advanced):',
          'For added complexity, you can float a few drops of Angostura bitters on top of the frothy egg white layer.'
        ]
      },
      {
        name: 'Chinese Lychee Martini',
        imageUrl: 'https://i.imgur.com/ZuY5ssy.png',
        ingredients: [
          '2 ounces (60 ml) Lychee Vodka (or regular vodka infused with lychee flavor)',
          '1/2 ounce (15 ml) Lychee Liqueur (such as Soho Lychee Liqueur)',
          '1/2 ounce (15 ml) Dry Vermouth',
          '1 ounce (30 ml) Lychee Juice (from canned lychees)',
          'Ice cubes',
          'Lychee fruit or a lychee garnish (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients:',
          'Measure out 2 ounces (60 ml) of lychee vodka (or regular vodka infused with lychee flavor).',
          'Measure out 1/2 ounce (15 ml) of lychee liqueur (such as Soho Lychee Liqueur).',
          'Measure out 1/2 ounce (15 ml) of dry vermouth.',
          'Measure out 1 ounce (30 ml) of lychee juice from canned lychees.',
          'Fill a Mixing Glass with Ice:',
          'Fill a mixing glass with ice cubes. This will chill the ingredients as you mix.',
          'Add Lychee Vodka, Lychee Liqueur, Dry Vermouth, and Lychee Juice:',
          'Add the measured lychee vodka, lychee liqueur, dry vermouth, and lychee juice to the mixing glass.',
          'Stir Well:',
          'Stir the ingredients well in the mixing glass using a bar spoon. Stirring is preferred for a silky texture without the cloudiness that shaking can sometimes introduce.',
          'Strain Into a Chilled Martini Glass:',
          'Strain the mixed ingredients into a chilled martini glass. You can use a julep strainer or any available strainer.',
          'Garnish:',
          'Garnish the Chinese Lychee Martini with a whole lychee fruit or a skewered lychee as a garnish.',
          'Optional Variation (Advanced):',
          'For an extra touch, you can rim the martini glass with a small amount of sugar for added sweetness.'
        ]
      }
      {
        name: 'Australian Eucalyptus Vodka Lemonade',
        imageUrl: 'https://i.imgur.com/5F9raB6.png',
        ingredients: [
          '2 ounces (60 ml) Eucalyptus-Infused Vodka',
          '1 ounce (30 ml) Fresh Lemon Juice',
          '1/2 ounce (15 ml) Eucalyptus Syrup',
          'Sparkling Lemonade',
          'Ice cubes',
          'Lemon slices and eucalyptus leaves (for garnish)'
        ],
        instructions: [
          'Prepare Eucalyptus-Infused Vodka (can be done ahead of time):',
          'In a glass jar or bottle, combine 1 cup of vodka with 2-3 cleaned and dried eucalyptus leaves.',
          'Seal the jar or bottle and let it sit at room temperature for at least 24 hours, allowing the vodka to absorb the eucalyptus flavor.',
          'Strain out the eucalyptus leaves, and the infused vodka is ready to use.',
          'Prepare Eucalyptus Syrup (can be done ahead of time):',
          'In a saucepan, combine 1/2 cup of water, 1/2 cup of sugar, and 2-3 cleaned and dried eucalyptus leaves.',
          'Heat the mixture over medium heat, stirring until the sugar is fully dissolved.',
          'Let it simmer for a few minutes, then remove from heat and let it cool.',
          'Strain out the eucalyptus leaves, and the eucalyptus syrup is ready to use.',
          'Australian Eucalyptus Vodka Lemonade:',
          'Prepare the Ingredients:',
          'Measure out 2 ounces (60 ml) of eucalyptus-infused vodka.',
          'Squeeze enough lemons to yield 1 ounce (30 ml) of fresh lemon juice.',
          'Measure out 1/2 ounce (15 ml) of eucalyptus syrup.',
          'Fill a Glass with Ice:',
          'Fill a highball glass with ice cubes.',
          'Add Eucalyptus-Infused Vodka, Fresh Lemon Juice, and Eucalyptus Syrup:',
          'Pour the measured eucalyptus-infused vodka, fresh lemon juice, and eucalyptus syrup over the ice in the highball glass.',
          'Top with Sparkling Lemonade:',
          'Top off the glass with sparkling lemonade. Adjust the amount based on your preference for effervescence.',
          'Stir Gently:',
          'Give the Australian Eucalyptus Vodka Lemonade a gentle stir to mix the ingredients together.',
          'Garnish:',
          'Garnish the drink with lemon slices and a few eucalyptus leaves for a fresh and aromatic touch.',
          'Optional Variation (Advanced):',
          'For an extra burst of flavor, you can muddle a eucalyptus leaf in the glass before adding the other ingredients.'
        ]
      },
      {
        name: 'Watermelon Basil Cooler',
        imageUrl: 'https://i.imgur.com/7cmaJLs.png',
        ingredients: [
          '2 cups Watermelon cubes (seedless)',
          '1 ounce (30 ml) Fresh Lime Juice',
          '1/2 ounce (15 ml) Simple Syrup',
          '6-8 Fresh Basil Leaves',
          '2 ounces (60 ml) Vodka',
          'Club Soda',
          'Ice cubes',
          'Watermelon wedges and basil leaves (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients:',
          'Cut 2 cups of seedless watermelon into cubes.',
          'Squeeze enough limes to yield 1 ounce (30 ml) of fresh lime juice.',
          'Prepare simple syrup if not already available.',
          'Ensure you have fresh basil leaves.',
          'Muddle Watermelon and Basil:',
          'In a cocktail shaker, muddle the watermelon cubes and fresh basil leaves to release their flavors. Muddle until the watermelon is well mashed.',
          'Add Fresh Lime Juice and Simple Syrup:',
          'Add the measured fresh lime juice and simple syrup to the shaker with the muddled watermelon and basil.',
          'Add Vodka:',
          'Pour the vodka into the shaker.',
          'Shake Vigorously:',
          'Shake the mixture vigorously for about 15 seconds. This will blend the flavors and chill the ingredients.',
          'Strain Into Glass:',
          'Strain the shaken mixture into a highball glass filled with ice cubes.',
          'Top with Club Soda:',
          'Top off the glass with club soda. You can adjust the amount based on your preference for effervescence.',
          'Stir Gently:',
          'Give the Watermelon Basil Cooler a gentle stir to mix the ingredients together.',
          'Garnish:',
          'Garnish the drink with watermelon wedges and fresh basil leaves for a vibrant presentation.',
          'Optional Variation (Advanced):',
          'For added visual appeal, you can float a few small watermelon balls on top of the drink.'
        ]
      },
      {
        name: 'Peach Mint Julep',
        imageUrl: 'https://i.imgur.com/F5FBLBG.png',
        ingredients: [
          '2 ounces (60 ml) Bourbon',
          '1/2 ounce (15 ml) Peach Syrup',
          '8-10 Fresh Mint Leaves (plus extra for garnish)',
          'Crushed Ice',
          'Peach slices (for garnish)',
          'Peach Syrup:',
          '1 cup Fresh or Frozen Peaches (sliced)',
          '1 cup Water',
          '1 cup Sugar'
        ],
        instructions: [
          'Peach Syrup:',
          'Prepare Peach Syrup (can be done ahead of time):',
          'In a saucepan, combine sliced peaches, water, and sugar.',
          'Bring the mixture to a simmer over medium heat, stirring occasionally until sugar is fully dissolved.',
          'Let it simmer for about 5-7 minutes until the peaches are soft.',
          'Remove from heat and let it cool. Strain the syrup to remove peach solids.',
          'Peach Mint Julep:',
          'Prepare the Ingredients:',
          'Measure out 2 ounces (60 ml) of bourbon.',
          'Measure out 1/2 ounce (15 ml) of peach syrup.',
          'Ensure you have 8-10 fresh mint leaves.',
          'Muddle Mint in Julep Cup:',
          'Place the mint leaves in a julep cup. Lightly muddle the mint to release its aromatic oils.',
          'Add Bourbon and Peach Syrup:',
          'Pour the measured bourbon and peach syrup into the julep cup with muddled mint.',
          'Fill with Crushed Ice:',
          'Fill the julep cup with crushed ice. Pack it down to the top of the cup.',
          'Stir Gently:',
          'Use a bar spoon to stir the ingredients gently, ensuring that the flavors meld and the cocktail is well-chilled.',
          'Garnish:',
          'Garnish the Peach Mint Julep with a sprig of fresh mint and a few slices of peach.',
          'Optional Variation (Advanced):',
          'For added visual appeal, you can float a mint sprig on top of the ice.'
        ]
      },
      {
        name: 'Dragon Fruit Rum Punch',
        imageUrl: 'https://i.imgur.com/2Q7W8x2.png',
        ingredients: [
          '2 ounces (60 ml) White Rum',
          '1/2 cup Dragon Fruit (fresh or frozen, cubed)',
          '1/2 cup Pineapple Juice',
          '1/4 cup Orange Juice',
          '1/2 ounce (15 ml) Simple Syrup',
          '1/2 ounce (15 ml) Lime Juice',
          '1/2 ounce (15 ml) Grenadine',
          'Club Soda',
          'Ice cubes',
          'Get creative with the garnish'
        ],
        instructions: [
          'Prepare the Ingredients:',
          'Measure out 2 ounces (60 ml) of white rum.',
          'Cube 1/2 cup of fresh or frozen dragon fruit.',
          'Measure out 1/2 cup of pineapple juice.',
          'Measure out 1/4 cup of orange juice.',
          'Prepare simple syrup if not already available.',
          'Measure out 1/2 ounce (15 ml) of lime juice.',
          'Measure out 1/2 ounce (15 ml) of grenadine.',
          'Muddle Dragon Fruit:',
          'In a cocktail shaker, muddle the cubed dragon fruit to release its juices.',
          'Add Rum and Fruit Juices:',
          'Add the measured white rum, pineapple juice, orange juice, lime juice, and grenadine to the shaker with muddled dragon fruit.',
          'Add Simple Syrup:',
          'Pour the simple syrup into the shaker. Adjust the sweetness to your preference.',
          'Shake Well:',
          'Shake the mixture well for about 15 seconds to combine the flavors and chill the ingredients.',
          'Strain Into Glass:',
          'Strain the shaken mixture into a highball glass filled with ice cubes.',
          'Top with Club Soda:',
          'Top off the glass with club soda. Adjust the amount based on your preference for effervescence.',
          'Stir Gently:',
          'Give the Dragon Fruit Rum Punch a gentle stir to mix the ingredients together.',
          'Garnish:',
          'Garnish the drink with whatever you want for a tropical and colorful presentation.',
          'Optional Variation (Advanced):',
          'For an extra layer of flavor, you can float a few drops of bitters on top of the drink.'
        ]
      },
      {
        name: 'Passion Fruit Caipiroska',
        imageUrl: 'https://i.imgur.com/NqdaQNw.png',
        ingredients: [
          '2 ounces (60 ml) Vodka',
          '1-2 Fresh Passion Fruits',
          '1 ounce (30 ml) Simple Syrup',
          'Lime wedges',
          'Ice cubes',
          'Passion fruit seeds and lime slices (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients:',
          'Measure out 2 ounces (60 ml) of vodka.',
          'Cut the passion fruits in half and scoop out the pulp.',
          'Squeeze lime wedges to yield fresh lime juice.',
          'Prepare simple syrup if not already available.',
          'Muddle Passion Fruit and Lime:',
          'In a rocks glass or a similar vessel, muddle the fresh passion fruit pulp and lime wedges. Muddle just enough to release the juices without pulverizing the lime.',
          'Add Vodka:',
          'Pour the measured vodka over the muddled mixture in the glass.',
          'Add Simple Syrup:',
          'Pour the simple syrup into the glass. Adjust the amount based on your desired level of sweetness.',
          'Fill with Ice:',
          'Fill the glass with ice cubes. This will chill the drink and dilute it slightly.',
          'Stir Gently:',
          'Give the Passion Fruit Caipiroska a gentle stir to mix the ingredients and chill the mixture further.',
          'Garnish:',
          'Garnish the drink with passion fruit seeds (from the scooped-out pulp) and a lime slices.',
          'Optional Variation (Advanced):',
          'For added visual appeal, you can float a few passion fruit seeds on top of the ice.'
        ]
      }
      {
        name: 'Kiwi Coconut Mojito',
        imageUrl: 'https://i.imgur.com/OBjdo6k.png',
        ingredients: [
          '2 ounces (60 ml) White Rum',
          '1 Kiwi, peeled and sliced',
          '1 ounce (30 ml) Coconut Cream',
          '1 ounce (30 ml) Fresh Lime Juice',
          '1/2 ounce (15 ml) Simple Syrup',
          '8-10 Fresh Mint Leaves',
          'Club Soda',
          'Ice cubes',
          'Kiwi slices and mint sprig (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients:',
          'Measure out 2 ounces (60 ml) of white rum.',
          'Peel and slice one kiwi.',
          'Measure out 1 ounce (30 ml) of coconut cream.',
          'Squeeze enough limes to yield 1 ounce (30 ml) of fresh lime juice.',
          'Prepare simple syrup if not already available.',
          'Ensure you have fresh mint leaves.',
          'Muddle Kiwi and Mint:',
          'In a cocktail shaker, muddle the sliced kiwi and fresh mint leaves to release their flavors.',
          'Add Rum, Coconut Cream, Lime Juice, and Simple Syrup:',
          'Add the measured white rum, coconut cream, fresh lime juice, and simple syrup to the shaker with muddled kiwi and mint.',
          'Shake Well:',
          'Shake the mixture well for about 15 seconds. This will combine the flavors and chill the ingredients.',
          'Strain Into Glass:',
          'Strain the shaken mixture into a highball glass filled with ice cubes.',
          'Top with Club Soda:',
          'Top off the glass with club soda. Adjust the amount based on your preference for effervescence.',
          'Stir Gently:',
          'Give the Kiwi Coconut Mojito a gentle stir to mix the ingredients together.',
          'Garnish:',
          'Garnish the drink with kiwi slices and a sprig of fresh mint for a tropical and vibrant presentation.',
          'Optional Variation (Advanced):',
          'For added visual appeal, you can float a few kiwi slices on top of the ice.'
        ]
      }, 
      {
        name: 'Strawberry Balsamic Smash',
        imageUrl: 'https://i.imgur.com/p6VX1Es.png',
        ingredients: [
          '2 ounces (60 ml) Bourbon',
          '1 cup Fresh Strawberries, hulled and halved',
          '1 ounce (30 ml) Balsamic Reduction',
          '1/2 ounce (15 ml) Simple Syrup',
          '6-8 Fresh Mint Leaves',
          'Ice cubes',
          'Strawberry slices and mint sprig (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients:',
          'Measure out 2 ounces (60 ml) of bourbon.',
          'Hull and halve 1 cup of fresh strawberries.',
          'Prepare a balsamic reduction by simmering balsamic vinegar until it thickens. Measure out 1 ounce (30 ml) of the reduction.',
          'Prepare simple syrup if not already available.',
          'Ensure you have fresh mint leaves.',
          'Muddle Strawberries and Mint:',
          'In a mixing glass or cocktail shaker, muddle the halved strawberries and fresh mint leaves to release their flavors.',
          'Add Bourbon, Balsamic Reduction, and Simple Syrup:',
          'Add the measured bourbon, balsamic reduction, and simple syrup to the shaker with muddled strawberries and mint.',
          'Shake Well:',
          'Shake the mixture well for about 15 seconds. This will infuse the flavors and chill the ingredients.',
          'Strain Into Glass:',
          'Strain the shaken mixture into a rocks glass filled with ice cubes.',
          'Garnish:',
          'Garnish the Strawberry Balsamic Smash with strawberry slices and a mint sprig for a fresh and aromatic presentation.',
          'Optional Variation (Advanced):',
          'For added visual appeal, you can rim the glass with a mixture of sugar and balsamic reduction.'
        ]
      },
      {
        name: 'Cantaloupe Ginger Sparkler',
        imageUrl: 'https://i.imgur.com/811aXuL.png',
        ingredients: [
          '1 cup Cantaloupe, peeled, seeded, and cubed',
          '1 ounce (30 ml) Ginger Syrup',
          '1/2 ounce (15 ml) Fresh Lemon Juice',
          '2 ounces (60 ml) Vodka',
          'Sparkling Water',
          'Ice cubes',
          'Cantaloupe balls and mint sprig (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients:',
          'Cube 1 cup of peeled, seeded cantaloupe.',
          'Measure out 1 ounce (30 ml) of ginger syrup.',
          'Squeeze enough lemons to yield 1/2 ounce (15 ml) of fresh lemon juice.',
          'Measure out 2 ounces (60 ml) of vodka.',
          'Blend Cantaloupe:',
          'In a blender, puree the cubed cantaloupe until smooth. Strain the puree to extract the juice, discarding any solids.',
          'Mix Cantaloupe Juice, Ginger Syrup, Lemon Juice, and Vodka:',
          'In a cocktail shaker, combine the cantaloupe juice, ginger syrup, fresh lemon juice, and vodka.',
          'Shake Well:',
          'Shake the mixture well for about 15 seconds to blend the flavors and chill the ingredients.',
          'Strain Into Glass:',
          'Strain the shaken mixture into a tall glass filled with ice cubes.',
          'Top with Sparkling Water:',
          'Top off the glass with sparkling water. Adjust the amount based on your preference for effervescence.',
          'Garnish:',
          'Garnish the drink with cantaloupe balls and a mint sprig for a refreshing and visual touch.',
          'Optional Variation (Advanced):',
          'For added flair, you can rim the glass with a mixture of sugar and grated ginger.'
        ]
      },
      {
        name: 'Raspberry Peach Bellini',
        imageUrl: 'https://i.imgur.com/yGxBNIh.png',
        ingredients: [
          '1 cup Ripe Peaches, peeled and diced',
          '1/2 cup Raspberries',
          '1 tablespoon Simple Syrup',
          '1 bottle (750 ml) Prosecco or Champagne, well-chilled',
          'Fresh mint leaves (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients:',
          'Peel and dice 1 cup of ripe peaches.',
          'Measure out 1/2 cup of raspberries.',
          'Prepare simple syrup if not already available.',
          'Ensure you have a well-chilled bottle of prosecco or champagne.',
          'Blend Peaches, Raspberries, and Simple Syrup:',
          'In a blender, combine the diced peaches, raspberries, and simple syrup.',
          'Blend until you achieve a smooth puree. Strain the puree to remove any seeds or solids, if desired.',
          'Assemble the Bellini:',
          'Spoon about 1 to 2 tablespoons of the peach-raspberry puree into the bottom of a chilled champagne flute.',
          'Top with Prosecco or Champagne:',
          'Pour the well-chilled prosecco or champagne into the glass over the fruit puree. Fill the glass nearly to the top.',
          'Stir Gently:',
          'Give the Bellini a gentle stir to mix the puree with the sparkling wine.',
          'Garnish:',
          'Garnish the Raspberry Peach Bellini with a fresh raspberry and a mint leaf for an elegant touch.',
          'Optional Variation (Advanced):',
          'For an extra touch of sweetness, you can rim the glass with sugar.'
        ]
      },
      {
        name: 'Blood Orange Elderflower Martini',
        imageUrl: 'https://i.imgur.com/gYjo92P.png',
        ingredients: [
          '2 ounces (60 ml) Gin',
          '1 ounce (30 ml) Elderflower Liqueur (such as St-Germain)',
          '2 ounces (60 ml) Freshly Squeezed Blood Orange Juice',
          '1/2 ounce (15 ml) Simple Syrup',
          'Ice cubes',
          'Blood orange twist or slice (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients:',
          'Measure out 2 ounces (60 ml) of gin.',
          'Measure out 1 ounce (30 ml) of elderflower liqueur.',
          'Squeeze enough blood oranges to yield 2 ounces (60 ml) of fresh juice.',
          'Prepare simple syrup if not already available.',
          'Ensure you have ice cubes.',
          'Shake the Ingredients:',
          'In a cocktail shaker, combine the gin, elderflower liqueur, freshly squeezed blood orange juice, and simple syrup.',
          'Add Ice and Shake:',
          'Add a handful of ice cubes to the shaker.',
          'Shake the mixture vigorously for about 15 seconds to chill the ingredients.',
          'Strain Into Martini Glass:',
          'Strain the shaken mixture into a chilled martini glass to remove the ice and any pulp.',
          'Garnish:',
          'Garnish the Blood Orange Elderflower Martini with a twist or slice of blood orange. You can express the oils from the twist over the drink by giving it a twist over the glass before dropping it in.',
          'Optional Variation (Advanced):',
          'For an extra layer of flavor, you can rim the glass with sugar or a mixture of sugar and blood orange zest.'
        ]
      }
      {
        name: 'Papaya Pineapple Rum Punch',
        imageUrl: 'https://i.imgur.com/bbLXLrd.png',
        ingredients: [
          '2 cups Fresh Papaya, peeled, seeded, and cubed',
          '1 cup Fresh Pineapple, peeled, cored, and cubed',
          '1 cup Pineapple Juice',
          '2 ounces (60 ml) Dark Rum',
          '1 ounce (30 ml) Coconut Cream',
          '1 ounce (30 ml) Orange Juice',
          '1/2 ounce (15 ml) Simple Syrup',
          '1/2 ounce (15 ml) Lime Juice',
          'Ice cubes',
          'Get creative (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients:',
          'Peel, seed, and cube 2 cups of fresh papaya.',
          'Peel, core, and cube 1 cup of fresh pineapple.',
          'Measure out 1 cup of pineapple juice.',
          'Measure out 2 ounces (60 ml) of dark rum.',
          'Measure out 1 ounce (30 ml) of coconut cream.',
          'Squeeze enough oranges and limes to yield 1 ounce (30 ml) of orange juice and 1/2 ounce (15 ml) of lime juice.',
          'Prepare simple syrup if not already available.',
          'Blend Papaya and Pineapple:',
          'In a blender, combine the cubed papaya, cubed pineapple, pineapple juice, dark rum, coconut cream, orange juice, lime juice, and simple syrup.',
          'Blend until you achieve a smooth and well-mixed consistency.',
          'Chill the Mixture:',
          'Refrigerate the blended mixture for at least 1-2 hours to enhance the flavors and chill the punch.',
          'Serve Over Ice:',
          'Fill glasses with ice cubes.',
          'Pour the Punch:',
          'Pour the chilled papaya pineapple rum punch into the glasses over the ice.',
          'Garnish:',
          'Garnish each glass with whatever you want for a tropical and vibrant presentation.',
          'Optional Variation (Advanced):',
          'For an extra touch of elegance, you can rim the glasses with a mixture of sugar and grated lime zest.',
          'Stir Gently:',
          'Give the punch a gentle stir before sipping to ensure even distribution of flavors.'
        ]
      },
      {
        name: 'Lychee Rose Gin Fizz',
        imageUrl: 'https://i.imgur.com/ifWskgM.png',
        ingredients: [
          '2 ounces (60 ml) Gin',
          '1/2 cup Fresh Lychee, peeled and deseeded (reserve a few for garnish)',
          '1/2 ounce (15 ml) Lychee Syrup (from canned lychee or store-bought)',
          '1/2 ounce (15 ml) Rose Water',
          '1/2 ounce (15 ml) Simple Syrup',
          '1 ounce (30 ml) Fresh Lemon Juice',
          '1 Egg White',
          'Soda Water',
          'Ice cubes',
          'Rose petals and lychee for garnish'
        ],
        instructions: [
          'Prepare the Ingredients:',
          'Measure out 2 ounces (60 ml) of gin.',
          'Peel and deseed 1/2 cup of fresh lychee (reserve a few for garnish).',
          'Measure out 1/2 ounce (15 ml) of lychee syrup.',
          'Measure out 1/2 ounce (15 ml) of rose water.',
          'Prepare simple syrup if not already available.',
          'Squeeze enough lemons to yield 1 ounce (30 ml) of fresh lemon juice.',
          'Ensure you have an egg white.',
          'Muddle Lychee:',
          'In a cocktail shaker, muddle the fresh lychee to release its juices.',
          'Add Gin, Lychee Syrup, Rose Water, Simple Syrup, and Lemon Juice:',
          'Add the measured gin, lychee syrup, rose water, simple syrup, and fresh lemon juice to the shaker with muddled lychee.',
          'Dry Shake:',
          'Dry shake the ingredients without ice for about 15 seconds. This helps emulsify the egg white for a frothy texture.',
          'Add Ice and Shake Again:',
          'Add a handful of ice cubes to the shaker and shake the mixture again for an additional 15 seconds to chill the ingredients.',
          'Strain Into Glass:',
          'Double strain (using a fine mesh strainer) the shaken mixture into a chilled highball or Collins glass filled with ice cubes.',
          'Top with Soda Water:',
          'Top off the glass with soda water to your desired level of effervescence.',
          'Garnish:',
          'Garnish the Lychee Rose Gin Fizz with lychee and rose petals for an elegant and aromatic touch.',
          'Optional Variation (Advanced):',
          'For added visual appeal, you can float a few rose petals on top of the drink.'
        ]
      },
      {
        name: 'Blackberry Mint Lemonade Rum Float',
        imageUrl: 'https://i.imgur.com/j9hbTUy.png',
        ingredients: [
          '1 cup Fresh Blackberries',
          '1oz White Rum',
          '1/2 cup Fresh Mint Leaves (plus extra for garnish)',
          '1 cup Freshly Squeezed Lemon Juice',
          '1/2 cup Simple Syrup',
          '4 cups Cold Water',
          'Ice cubes',
          'Lemon slices, blackberries, and mint sprigs (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients:',
          'Wash and clean 1 cup of fresh blackberries.',
          'Wash and ensure you have 1/2 cup of fresh mint leaves.',
          'Squeeze enough lemons to yield 1 cup of freshly squeezed lemon juice.',
          'Prepare simple syrup if not already available.',
          'Ensure you have ice cubes.',
          'Muddle Blackberries and Mint:',
          'In a pitcher, muddle the fresh blackberries and mint leaves to release their flavors.',
          'Add Lemon Juice and Simple Syrup:',
          'Add the freshly squeezed lemon juice and simple syrup to the pitcher with muddled blackberries and mint.',
          'Mix Well:',
          'Mix the ingredients well to combine the flavors.',
          'Add Cold Water:',
          'Pour 4 cups of cold water into the pitcher. Adjust the amount of water based on your desired level of tartness and sweetness.',
          'Stir Gently:',
          'Give the Blackberry Mint Lemonade a gentle stir to ensure all the ingredients are well-mixed.',
          'Chill:',
          'Place the pitcher in the refrigerator to chill the lemonade for at least 1-2 hours.',
          'Serve Over Ice:',
          'Fill glasses with ice cubes.',
          'Pour Lemonade:',
          'Pour the chilled Blackberry Mint Lemonade into the glasses over the ice.',
          'Float Rum:',
          'Slowly pour the rum on the back of a bar spoon to float the rum.',
          'Garnish:',
          'Garnish each glass with lemon slices, fresh blackberries, and a sprig of mint for a colorful and refreshing presentation.',
          'Optional Variation (Advanced):',
          'For added visual appeal, you can rim the glass with sugar or a mixture of sugar and finely chopped mint.'
        ]
      },
      {
        name: 'Apple Cinnamon Whiskey Sour',
        imageUrl: 'https://i.imgur.com/mKu6SpY.png',
        ingredients: [
          '2 ounces (60 ml) Bourbon or Rye Whiskey',
          '1 ounce (30 ml) Freshly Squeezed Lemon Juice',
          '1/2 ounce (15 ml) Cinnamon Syrup',
          '1/2 ounce (15 ml) Apple Juice',
          '1 Egg White',
          'Ice cubes',
          'Apple slice and cinnamon stick (for garnish)',
          'Cinnamon Syrup:',
          '1/2 cup Water',
          '1/2 cup Sugar',
          '2 Cinnamon Sticks'
        ],
        instructions: [
          'Cinnamon Syrup:',
          'Prepare Cinnamon Syrup (can be done ahead of time):',
          'In a saucepan, combine water, sugar, and cinnamon sticks.',
          'Heat the mixture over medium heat, stirring until the sugar is fully dissolved.',
          'Let it simmer for about 5-7 minutes to infuse the cinnamon flavor.',
          'Remove from heat and let it cool. Remove the cinnamon sticks, and the cinnamon syrup is ready to use.',
          'Apple Cinnamon Whiskey Sour:',
          'Prepare the Ingredients:',
          'Measure out 2 ounces (60 ml) of bourbon or rye whiskey.',
          'Squeeze enough lemons to yield 1 ounce (30 ml) of freshly squeezed lemon juice.',
          'Measure out 1/2 ounce (15 ml) of cinnamon syrup.',
          'Measure out 1/2 ounce (15 ml) of apple juice.',
          'Ensure you have an egg white.',
          'Dry Shake with Egg White:',
          'In a cocktail shaker, add the whiskey, freshly squeezed lemon juice, cinnamon syrup, apple juice, and the egg white.',
          'Dry shake (shake without ice) vigorously for about 15 seconds. This helps emulsify the egg white for a frothy texture.',
          'Add Ice and Shake Again:',
          'Add a handful of ice cubes to the shaker and shake the mixture again for an additional 15 seconds to chill the ingredients.',
          'Strain Into Glass:',
          'Double strain (using a fine mesh strainer) the shaken mixture into a rocks glass filled with ice cubes.',
          'Garnish:',
          'Garnish the Apple Cinnamon Whiskey Sour with an apple slice and a cinnamon stick for a seasonal and aromatic touch.',
          'Optional Variation (Advanced):',
          'For added visual appeal, you can sprinkle a pinch of ground cinnamon on top of the foam.'
        ]
      },
      {
        name: 'Cranberry Orange Mule',
        imageUrl: 'https://i.imgur.com/EkRYhO3.png',
        ingredients: [
          '2 ounces (60 ml) Vodka',
          '1/2 cup Cranberry Juice',
          '1/2 ounce (15 ml) Fresh Orange Juice',
          '1 tablespoon Fresh Lime Juice',
          'Ginger Beer',
          'Ice cubes',
          'Fresh cranberries, orange slices, and rosemary sprig (for garnish)'
        ],
        instructions: [
          'Prepare the Ingredients:',
          'Measure out 2 ounces (60 ml) of vodka.',
          'Pour 1/2 cup of cranberry juice.',
          'Squeeze enough oranges to yield 1/2 ounce (15 ml) of fresh orange juice.',
          'Squeeze enough limes to yield 1 tablespoon of fresh lime juice.',
          'Ensure you have ginger beer on hand.',
          'Ensure you have ice cubes.',
          'Build the Base:',
          'In a copper mug or highball glass, add the measured vodka, cranberry juice, fresh orange juice, and fresh lime juice.',
          'Stir Well:',
          'Stir the ingredients well to combine.',
          'Add Ice:',
          'Fill the glass with ice cubes.',
          'Top with Ginger Beer:',
          'Top off the glass with ginger beer, leaving some space at the top.',
          'Stir Gently:',
          'Give the Cranberry Orange Mule a gentle stir to mix the ingredients together.',
          'Garnish:',
          'Garnish the drink with fresh cranberries, orange slices, and a rosemary sprig for a festive and aromatic presentation.',
          'Optional Variation (Advanced):',
          'For an extra touch of sweetness and visual appeal, you can rim the glass with sugar or a mixture of sugar and orange zest.'
        ]
      }
      {
        name: "Grapefruit Thyme Sparkler",
        imageUrl: "https://i.imgur.com/tHkPyxE.png",
        ingredients: [
          "2 ounces (60 ml) Gin",
          "1/2 cup Freshly Squeezed Grapefruit Juice",
          "1/2 ounce (15 ml) Thyme Simple Syrup",
          "Sparkling Water",
          "Ice cubes",
          "Fresh thyme sprigs and grapefruit slices (for garnish)"
        ],
        instructions: [
          "Combine gin, grapefruit juice, and thyme simple syrup in a glass.",
          "Stir well and add ice.",
          "Top with sparkling water.",
          "Garnish with thyme sprigs and grapefruit slices.",
          "Optional: Rim the glass with sugar or thyme leaves."
        ]
      },
      {
        name: "Guava Basil Margarita",
        imageUrl: "https://i.imgur.com/14m2uKa.png",
        ingredients: [
          "2 ounces (60 ml) Silver Tequila",
          "1 ounce (30 ml) Guava Juice (100% pure)",
          "1/2 ounce (15 ml) Fresh Lime Juice",
          "1/2 ounce (15 ml) Simple Syrup",
          "3-4 Fresh Basil Leaves",
          "Ice cubes",
          "Salt or Tajín (for rimming, optional)",
          "Lime wheel (for rimming and garnish)"
        ],
        instructions: [
          "Rim the edge of a rocks glass with salt or Tajín (optional).",
          "Muddle basil leaves in the glass.",
          "In a shaker, combine tequila, guava juice, lime juice, and simple syrup.",
          "Shake well, then strain into the prepared glass.",
          "Garnish with basil and lime."
        ]
      },
      {
        name: "Mango Habanero Margarita",
        imageUrl: "https://i.imgur.com/D7WNrYr.png",
        ingredients: [
          "2 ounces (60 ml) Silver Tequila",
          "1 ounce (30 ml) Fresh Mango Puree",
          "1/2 ounce (15 ml) Triple Sec or Orange Liqueur",
          "1/2 ounce (15 ml) Fresh Lime Juice",
          "1/2 ounce (15 ml) Habanero Syrup",
          "Ice cubes",
          "Tajín or salt (for rimming, optional)",
          "Lime slices (for garnish)"
        ],
        instructions: [
          "Rim the edge of a rocks glass with Tajín or salt (optional).",
          "In a cocktail shaker, combine tequila, mango puree, triple sec, lime juice, and habanero syrup.",
          "Add ice cubes and shake well.",
          "Strain into the prepared glass over fresh ice.",
          "Garnish with lime slices."
        ]
      },
      {
        name: "Blueberry Mint Gin Fizz",
        imageUrl: "https://i.imgur.com/RXL5pXT.png",
        ingredients: [
          "2 ounces (60 ml) Gin",
          "1/2 cup Fresh Blueberries (plus extra for garnish)",
          "1/2 ounce (15 ml) Simple Syrup",
          "1/2 ounce (15 ml) Fresh Lemon Juice",
          "3-4 Fresh Mint Leaves (plus extra for garnish)",
          "1 Egg White",
          "Club Soda",
          "Ice cubes"
        ],
        instructions: [
          "In a cocktail shaker, muddle blueberries and mint leaves.",
          "Add gin, simple syrup, lemon juice, and egg white. Dry shake.",
          "Add ice cubes and shake again.",
          "Double strain into a glass filled with ice.",
          "Top with club soda and garnish with blueberries and mint."
        ]
      },
      {
        name: "Coconut Pineapple Rum Runner",
        imageUrl: "https://i.imgur.com/FHvY5aV.png",
        ingredients: [
          "1 1/2 ounces (45 ml) Dark Rum",
          "1/2 ounce (15 ml) Coconut Rum",
          "1/2 ounce (15 ml) Blackberry Liqueur",
          "1/2 ounce (15 ml) Banana Liqueur",
          "2 ounces (60 ml) Pineapple Juice",
          "1 ounce (30 ml) Orange Juice",
          "1 ounce (30 ml) Grenadine",
          "Crushed Ice",
          "Pineapple slice and strawberry (for garnish)"
        ],
        instructions: [
          "In a shaker, combine dark rum, coconut rum, blackberry liqueur, banana liqueur, pineapple juice, orange juice, and grenadine.",
          "Shake well and strain into a glass filled with crushed ice.",
          "Layer grenadine over the drink by pouring it over the back of a spoon.",
          "Garnish with pineapple slice and strawberry."
        ]
      }
      {
        name: "Cherry Almond Smash",
        imageUrl: "https://i.imgur.com/aZhwTH7.png",
        ingredients: [
          "2 ounces (60 ml) Bourbon",
          "1/2 ounce (15 ml) Amaretto",
          "1/2 ounce (15 ml) Simple Syrup",
          "1/2 cup Fresh Cherries, pitted",
          "1/2 ounce (15 ml) Fresh Lemon Juice",
          "3-4 Fresh Mint Leaves",
          "Ice cubes",
          "Club Soda",
          "Orange zest and additional cherries or preserved cherries(for garnish)"
        ],
        instructions: [
          "Measure and prepare all ingredients.",
          "Muddle cherries and mint in a cocktail shaker.",
          "Add bourbon, amaretto, simple syrup, and lemon juice.",
          "Shake well and strain into a martini glass.",
          "Top with club soda and stir gently.",
          "Garnish with orange zest and cherries."
        ]
      },
      {
        name: "Toasted Marshmallow White Russian",
        imageUrl: "https://i.imgur.com/9pUV1an.png",
        ingredients: [
          "2 ounces (60 ml) Vodka",
          "1 ounce (30 ml) Coffee Liqueur (e.g., Kahlúa)",
          "1/2 cup Whole Milk or Cream",
          "1 tablespoon Marshmallow Fluff",
          "Ice cubes",
          "Toasted marshmallows (for garnish)"
        ],
        instructions: [
          "Measure and prepare all ingredients.",
          "Combine vodka, coffee liqueur, and milk/cream.",
          "Add marshmallow fluff and shake well.",
          "Strain into a glass filled with ice.",
          "Garnish with toasted marshmallows."
        ]
      },
      {
        name: "Chocolate Orange Martini",
        imageUrl: "https://i.imgur.com/S6aE66S.png",
        ingredients: [
          "2 ounces (60 ml) Chocolate Vodka",
          "1 ounce (30 ml) Orange Liqueur (e.g., Grand Marnier)",
          "1 ounce (30 ml) White Chocolate Liqueur",
          "1/2 ounce (15 ml) Half-and-Half or Heavy Cream",
          "Ice cubes"
        ],
        instructions: [
          "Measure and prepare all ingredients.",
          "Chill a martini glass in the freezer.",
          "Combine vodka, orange liqueur, white chocolate liqueur, and cream.",
          "Shake well with ice and strain into the chilled glass."
        ]
      },
      {
        name: "Tiramisu Cocktail",
        imageUrl: "https://i.imgur.com/iUQeWqJ.png",
        ingredients: [
          "1 1/2 ounces (45 ml) Coffee Liqueur (e.g., Kahlúa)",
          "1 ounce (30 ml) Vanilla Vodka",
          "1/2 ounce (15 ml) Dark Rum",
          "1/2 ounce (15 ml) Amaretto",
          "1 ounce (30 ml) Cold Brew Coffee",
          "1/2 ounce (15 ml) Simple Syrup",
          "1 ounce (30 ml) Heavy Cream",
          "Cocoa powder (for dusting)",
          "Ladyfinger or biscotti (for garnish, optional)",
          "Ice cubes"
        ],
        instructions: [
          "Measure and prepare all ingredients.",
          "Chill a martini or coupe glass in the freezer.",
          "Combine coffee liqueur, vanilla vodka, dark rum, amaretto, cold brew coffee, and simple syrup.",
          "Shake well with ice and strain into the chilled glass.",
          "Froth the heavy cream and float it on top of the cocktail.",
          "Dust with cocoa powder and garnish if desired."
        ]
      }
      {
        name: "Banana Bread Old Fashioned",
        imageUrl: "https://i.imgur.com/tGxVmoN.png",
        ingredients: [
          "2 ounces (60 ml) Banana-Infused Bourbon*",
          "1/2 ounce (15 ml) Brown Sugar Syrup**",
          "2 dashes Angostura Bitters",
          "Dried orange wheel (for garnish)",
          "Ice cubes"
        ],
        instructions: [
          "Prepare the Banana-Infused Bourbon as instructed.",
          "Prepare the Brown Sugar Syrup as instructed.",
          "Measure and prepare all ingredients.",
          "Muddle and mix the bourbon, syrup, and bitters.",
          "Stir well and strain into a glass.",
          "Garnish with dried orange wheel."
        ],
        advancedTip: "For an additional layer of flavor, smoke the glass."
      },
      {
        name: "Caramel Apple Moscow Mule",
        imageUrl: "https://i.imgur.com/jYl9SX5.png",
        ingredients: [
          "2 ounces (60 ml) Vodka",
          "1 ounce (30 ml) Caramel Liqueur",
          "1/2 ounce (15 ml) Fresh Lime Juice",
          "4 ounces (120 ml) Apple Cider",
          "Ginger Beer",
          "Ice cubes",
          "Sliced apples and fine brown sugar dusting (for garnish)"
        ],
        instructions: [
          "Prepare and measure all ingredients.",
          "Chill a copper mug.",
          "Combine vodka, caramel liqueur, lime juice, and apple cider in the mug.",
          "Stir well and add ice cubes.",
          "Top with ginger beer and garnish."
        ],
        advancedTip: "Rim the copper mug with cinnamon sugar for an added flavor."
      },
      {
        name: "Pumpkin Spice Bourbon Sour",
        imageUrl: "https://i.imgur.com/xt0ayLJ.png",
        ingredients: [
          "2 ounces (60 ml) Bourbon",
          "3/4 ounce (22.5 ml) Fresh Lemon Juice",
          "Pumpkin Spice Syrup",
          "One egg white",
          "Ice cubes",
          "Pumpkin pie spice (for garnish)"
        ],
        instructions: [
          "Prepare the ingredients and pumpkin spice syrup.",
          "Dry shake bourbon, lemon juice, syrup, and egg white.",
          "Shake again with ice and strain into a glass.",
          "Garnish with pumpkin pie spice."
        ],
        advancedTip: "Lightly torch the foam with a kitchen torch for a brûlée effect."
      },
      {
        name: "Strawberry Shortcake Martini",
        imageUrl: "https://i.imgur.com/SFH5iff.png",
        ingredients: [
          "2 ounces (60 ml) Vanilla Vodka",
          "1 ounce (30 ml) Strawberry Liqueur",
          "1 ounce (30 ml) Heavy Cream",
          "1/2 ounce (15 ml) Simple Syrup",
          "Fresh strawberries",
          "Ice cubes"
        ],
        instructions: [
          "Prepare and measure all ingredients.",
          "Muddle fresh strawberries in a shaker.",
          "Add vodka, liqueur, cream, and syrup.",
          "Shake well with ice and strain into a glass.",
          "Garnish with fresh strawberries."
        ],
        advancedTip: "Drizzle strawberry syrup or add whipped cream for an extra touch."
      },
      {
        name: "Lemon Meringue Pie Martini",
        imageUrl: "https://i.imgur.com/Ysy0D3m.png",
        ingredients: [
          "2 ounces (60 ml) Lemon Vodka",
          "1/2 ounce (15 ml) Vanilla Liqueur",
          "1/2 ounce (15 ml) Lemon Juice",
          "1/2 ounce (15 ml) Simple Syrup",
          "Sugar with citric acid (for rimming)",
          "Lemon slices",
          "Ice cubes"
        ],
        instructions: [
          "Prepare and measure all ingredients.",
          "Rim the glass with sugar and citric acid if desired.",
          "Combine vodka, liqueur, lemon juice, and syrup in a shaker.",
          "Shake with ice and strain into a glass.",
          "Garnish with lemon slices."
        ],
        advancedTip: "Rim the glass with sugar and citric acid for an enhanced flavor experience."
      }    
      {
        name: "Hazelnut Espresso Martini",
        imageUrl: "https://i.imgur.com/fZIFxk9.png",
        ingredients: [
          "2 ounces (60 ml) Hazelnut Flavored Vodka",
          "1/2 ounce (15 ml) Coffee Liqueur (e.g., Kahlúa)",
          "1/2 ounce (15 ml) Hazelnut Liqueur (e.g., Frangelico)",
          "1 ounce (30 ml) Freshly Brewed Espresso (cooled)",
          "1/2 ounce (15 ml) Simple Syrup",
          "Ice cubes",
          "Coffee beans (for garnish)"
        ],
        instructions: [
          "Prepare and measure all ingredients.",
          "Chill a martini glass.",
          "Combine vodka, coffee liqueur, hazelnut liqueur, espresso, and simple syrup in a shaker.",
          "Shake with ice for a frothy texture and strain into the chilled glass.",
          "Garnish with coffee beans.",
        ],
        advancedTip: "Lightly torch the surface of the foam for an added layer of flavor and presentation."
      },
      {
        name: "Key Lime Pie Mojito",
        imageUrl: "https://i.imgur.com/u2uERn8.png",
        ingredients: [
          "2 ounces (60 ml) White Rum",
          "1 ounce (30 ml) Key Lime Juice (freshly squeezed)",
          "1 tablespoon (15 ml) Sweetened Condensed Milk",
          "8-10 Fresh Mint Leaves",
          "1 tablespoon (15 ml) Simple Syrup",
          "Club Soda",
          "Lime wheel and mint sprig (for garnish)",
          "Crushed ice"
        ],
        instructions: [
          "Prepare and measure all ingredients.",
          "Muddle fresh mint leaves in a glass.",
          "Add key lime juice, sweetened condensed milk, and simple syrup to the muddled mint.",
          "Lightly muddle again to incorporate flavors.",
          "Pour in white rum, add crushed ice, and stir well.",
          "Top with club soda, garnish with lime wheel and mint sprig."
        ],
        advancedTip: "Rim the glass with crushed graham crackers for a nod to the pie crust."
      },
      {
        name: "Chipotle Passion Fruit Martini",
        imageUrl: "https://i.imgur.com/ayLJfZ6.png",
        ingredients: [
          "2 ounces (60 ml) Chipotle-Infused Vodka*",
          "1 ounce (30 ml) Passion Fruit Puree",
          "1/2 ounce (15 ml) Agave Syrup",
          "1/2 ounce (15 ml) Lime Juice (freshly squeezed)",
          "Ice cubes",
          "Passion fruit (for garnish)"
        ],
        instructions: [
          "Prepare and measure all ingredients.",
          "Chill a martini glass.",
          "Combine chipotle-infused vodka, passion fruit puree, agave syrup, and lime juice in a shaker.",
          "Shake with ice and strain into the chilled glass.",
          "Optional garnish with a passion fruit half.",
        ],
        advancedTip: "Smoke the glass for a smokier flavor using a smoking gun or wood chip-smoked glass cover."
      },
      {
        name: "Wasabi Ginger Sake Cocktail",
        imageUrl: "https://i.imgur.com/PyMynKh.png",
        ingredients: [
          "2 ounces (60 ml) Sake",
          "1/2 ounce (15 ml) Ginger Liqueur (e.g., Domaine de Canton)",
          "1/4 teaspoon Wasabi Paste (adjust to taste)",
          "1/2 ounce (15 ml) Simple Syrup",
          "1/2 ounce (15 ml) Fresh Lime Juice (freshly squeezed)",
          "Ice cubes",
          "Fresh ginger slices (for garnish)"
        ],
        instructions: [
          "Prepare and measure all ingredients.",
          "Chill a rocks glass or a coupe glass.",
          "Combine sake, ginger liqueur, wasabi paste, simple syrup, and lime juice in a shaker.",
          "Shake with ice and strain into the chilled glass.",
          "Garnish with thin slices of fresh ginger."
        ],
        advancedTip: "Rim the glass with a mixture of salt and wasabi powder for a spicy kick if you enjoy heat."
      },
      {
        name: "Mangorita Slush",
        imageUrl: "https://i.imgur.com/G4hlVIp.png",
        ingredients: [
          "2 ounces (60 ml) Tequila",
          "1 ounce (30 ml) Triple Sec",
          "1 1/2 ounces (45 ml) Fresh Lime Juice",
          "1 ounce (30 ml) Mango Puree",
          "1/2 ounce (15 ml) Agave Syrup (adjust to taste)",
          "Ice cubes",
          "Salt (for rimming, optional)",
          "Lime wedge (for garnish)"
        ],
        instructions: [
          "Prepare and measure all ingredients.",
          "In a blender, combine tequila, triple sec, lime juice, mango puree, agave syrup, and ice cubes.",
          "Optional: Rim a margarita glass with salt, sugar, and tajin mix.",
          "Pour the slushed cocktail into the margarita glass.",
          "Garnish with a lime wedge.",
        ],
        advancedTip: "Float a small amount of mango puree on top of the drink before garnishing for an extra touch of flavor."
      }
    ];

  // Exporting the cocktails array for use in other scripts
  export default cocktails;
  