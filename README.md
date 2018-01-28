# react-stylux

This is currently a very alpha stage project, documentation will be lack luster for a few weeks. Please stand by while testing occurs. It should also be noted that no items are responsive, and are only psuedo responsive to the extent that flex-wrap is responsive. 


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
npm install --save react-stylux
```

## How To Use Stylux

### Included in the base version of react-stylux is:
* H1 1-5
* H2 1-5
* H3 1-5
* H4 1-5
* P (Paragraphs) 1-5
* PLQ (Pull Quotes) 1-2

#### Currently not done:
* Pull Quote 1
* Pull Quote 2

### Step by step:

Stylux utilizes three main components and flex-box to handle layouts effectively. As an example, import Container1, Holder1, and Navbar1:

```
import {
    Container1,
    Holder1,
    NavBar1,
} from 'react-stylux';
```

Now you can use these components like any other component!

```
<Container1>
    <Holder1>
        <NavBar1>
            <Link to="">Item1</Link>
            <Link to="">Item2</Link>
            <Link to="">Item3</Link>
        </NavBar1>
        <NavBar1>
            <Link to="facebook.com"></Link>
            <Link to="twitter.com"></Link>
            <Link to="instagram.com"></Link>
        </NavBar1>
    </Holder1>
</Container1>
```
Children are passed into the block level component to render based on type. In the example above, NavBar1 is used in conjunction with Holder1. This will create two spaces, and create two navbars center aligned. As a special note, every navbar block is hooked up with a className to psuedo render a logo based on href/to address info using the font awesome library.

props can be passed into every item to further create a custom expierence:
```
<Container1>
    <Holder1
        block1="2">
        <NavBar1>
            <Link to="">Item1</Link>
            <Link to="">Item2</Link>
            <Link to="">Item3</Link>
        </NavBar1>
        <NavBar1
            align="flex-end"
            navbarWidth="60%">
            <Link to="facebook.com"></Link>
            <Link to="twitter.com"></Link>
            <Link to="instagram.com"></Link>
        </NavBar1>
    </Holder1>
</Container1>
```
This is just a basic example of what can be done with stylux. Basic documentation on the current blocks can be seen below, a more comprehensive website is currently being worked on.

## Documentation:

Each element will be shown with an example of the possible props equal to the default props, if no default is set then the prop will have no equals.
Each elements will then be shown is an example of children accepted.


### Text Specific

#### Headings (all names subject to change)

Each of these headings follow a specific pattern:
* 1: Base Version - 1.333 * 1.618ish
* 2: Smaller Version - num/1.2ish
* 3: Larger Version - num * 1.2ish
* 4: Light Gray Base Version
* 5: Open (Possible outline version)

##### MainHeadings <H1 />

###### MainHeading1
```
<H11
    color = 'black'
    font = 'sans-serif'
    size = '8em'
    weight = '900'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 15px 0'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<H11>This is a Heading</H11>
```


###### MainHeading2
```
<H12
    color = 'black'
    font = 'sans-serif'
    size = '8em'
    weight = '900'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 15px 0'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<H12>This is a Heading</H12>
```


###### MainHeading3
```
<H13
    color = 'black'
    font = 'sans-serif'
    size = '9em'
    weight = '900'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 15px 0'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<H13>This is a Heading</H13>
```


###### MainHeading4
```
<H14
    color = 'lightgray'
    font = 'sans-serif'
    size = '8em'
    weight = '900'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 15px 0'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<H14>This is a Heading</H14>
```


###### MainHeading5
**Not Finished**
```
<H15
    color = 'black'
    font = 'sans-serif'
    size = '8em'
    weight = '900'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 15px 0'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<H15>This is a Heading</H15>
```


##### Headings <H2 />
###### Heading1
```
<H21
    color = 'black'
    font = 'sans-serif'
    size = '5.646em'
    weight = '600'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<H21>This is a Heading</H21>
```


###### Heading2
```
<H22
    color = 'black'
    font = 'sans-serif'
    size = '4.705em'
    weight = '600'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<H22>This is a Heading</H22>
```


###### Heading3
```
<H23
    color = 'black'
    font = 'sans-serif'
    size = '6.775em'
    weight = '600'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<H23>This is a Heading</H23>
```


###### Heading4
```
<H24
    color = 'lightgray'
    font = 'sans-serif'
    size = '5.646em'
    weight = '600'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<H24>This is a Heading</H24>
```


###### Heading5
**Not Finished**
```
<Heading5
    color = 'black'
    font = 'sans-serif'
    size = '5.646em'
    weight = '600'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<H25>This is a Heading</H25>
```


##### SubHeadings <H3 />

###### SubHeading1
```
<H31
    color = 'black'
    font = 'sans-serif'
    size = '3.489em'
    weight = '400'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<H31>This is a Heading</H31>
```


###### SubHeading2
```
<H32
    color = 'black'
    font = 'sans-serif'
    size = '2.9075em'
    weight = '400'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<H32>This is a Heading</H32>
```


###### SubHeading3
```
<H33
    color = 'black'
    font = 'sans-serif'
    size = '4.187em'
    weight = '400'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<H33>This is a Heading</H33>
```


###### SubHeading4
```
<H34
    color = lightgray'
    font = 'sans-serif'
    size = '3.489em'
    weight = '400'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<H34>This is a Heading</H34>
```


###### SubHeading5
**Not Finished**
```
<H35
    color = 'black'
    font = 'sans-serif'
    size = '3.489em'
    weight = '400'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 5px 0'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<H35>This is a Heading</H35>
```


##### SubHeadings <H4 />

###### SecondarySubHeading1
```
<H41
    color = 'black'
    font = 'sans-serif'
    size = '2.157em'
    weight = '200'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 3px 0'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<H41>This is a Heading</H41>
```

###### SecondarySubHeading2
```
<H42
    color = 'black'
    font = 'sans-serif'
    size = '1.7975em'
    weight = '200'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 3px 0'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<H42>This is a Heading</H42>
```


###### SecondarySubHeading3
```
<H43
    color = 'black'
    font = 'sans-serif'
    size = '2.588em'
    weight = '200'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 3px 0'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<H43>This is a Heading</H43>
```


###### SecondarySubHeading4
```
<H44
    color = 'lightgray'
    font = 'sans-serif'
    size = '2.157em'
    weight = '200'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 3px 0'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<H44>This is a Heading</H44>
```


###### SecondarySubHeading5
**Not Finished**
```
<H45
    color = 'black'
    font = 'sans-serif'
    size = '2.157em'
    weight = '200'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '0 0 3px 0'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<H45>This is a Heading</H45>
```


#### Paragraphs (all names subject to change)

Each of these paragraphs follow a specific pattern:
* 1: Base Version - 1.333
* 2: Smaller Version - 0.9
* 3: Larger Version - 1.6
* 4: Light Gray larger Version -  1.6
* 5: Open (Possible dropcap version) - 1.333

##### Paragraphs <p />

###### Paragraph1
```
<P1
    color = 'black'
    font = 'serif'
    size = '1.333em'
    lineHeight = '1.5em'
    weight = '400'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '10px 10%'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<P1>This is a Heading</P1>
```


###### Paragraph2
```
<P2
    color = 'black'
    font = 'serif'
    size = '0.9em'
    lineHeight = '1.22em'
    weight = '400'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '10px 10%'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<P2>This is a Heading</P2>
```


###### Paragraph3
```
<P3
    color = 'black'
    font = 'serif'
    size = '1.6em'
    lineHeight = '1.8em'
    weight = '400'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '10px 10%'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<P3>This is a Heading</P3>
```


###### Paragraph4
```
<P4
    color = 'lightgray'
    font = 'serif'
    size = '1.6em'
    lineHeight = '1.8em'
    weight = '400'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '10px 10%'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<P4>This is a Heading</P4>
```


###### Paragraph5
**Not Finished**
```
<P5
    color = 'black'
    font = 'serif'
    size = '1.333em'
    lineHeight = '1.5em'
    weight = '400'
    display = 'flex'
    align = 'center'
    textAlign = 'center'
    padding = '10px 10%'
    margin = '0'
    width = 'inherit'
    height
    textShadow
    bLeft
    bRight
    bTop
    bBottom
    border
    id
    className
    aniCount
    aniTime
    aniName
    aniDur
    >
```
This accepts and renders one child
```
<P5>This is a Heading</P5>
```

##### Pull Quotes <blockquote />
**Not Finished**
###### Pullquote1

###### Pullquote2


## Known Bugs

**Will be added soon**


## Feature Wish List

**Will be added soon** 


## Built With

* [React](http://www.reactjs.org) - The library used

## Code of Conduct

a link should go to the code of conduct

## Contributing

No Contributions will be accepted outside of the project team until the project is out of full Alpha Testing


## Versioning
for a more detailed list of changes, please refer to the changelog

**0.2.0**
* Added media queries to containers, holders, headings, and pargaraphs
* added display ability through props
* updated readme

**0.1.0**
* major name changes will break all prior versions, see changelog
* Heading/Paragraph blocks have text align, height and width props available
* css reset hooked up to every block

**0.0.12**
* documentation added to readme

**0.0.10** works
* this is the furthest back that is mostly working


## Authors

* **Christopher Fox** -

## License

This is licensed under MIT license. If used in any project, please give ackknowledgments to Christoher Fox.


## Acknowledgments

* A Giant Thank you to [Dev Mountain](https://devmountain.com/) for teaching me to code good
* A big thank you to Morten Rand-Hendriksen for your videos on flex box and the code that allows the className socialness to work
* Credit to http://meyerweb.com/eric/tools/css/reset/  for use of a reset file
* Credit to the React-Styles team (used as nestingstyles) for the code to allow for media queries through style


## Changelog
**0.2.0**
* fixed carousel componentWillUnmount - still needs testing, will probably still show error in console
* added smdis && mddis to every container, holder, heading blocks, paragraph blocks, and image blocks
* added media queries for max-width 481px and minwidth 482px max-wdith 1200px everything else should render above 1200px
* adding in placeholder sizes until more responsive testing occurs
* readme updated for changes
* new animation and responsive design sections added to readme

**0.1.6**
* added lifecycle componentWillUnmount to carousels to stop interval
* added lifecycle componentWillRecieveProps to most blocks to allow for render updates

**0.1.5**
* added Table1 and Table2
* added animation path to blocks (feature not fully implemented)
* added the outline for animation integration into basic blocks (feature not fully implemented)
* moved most children to array into componentdidmount to set children on state
* fixed navbar1 classname & id
* lowered dropdownnav5 default text size
* fixed horizontal ticker 1
* readme updated for changes

**0.1.4**

* fixed dropdownnav1
* added togglePlace onto toggler2, this uses flexDirection to change toggle place eg 'column-reverse' || 'row' etc...
* changed toggler1 position to fixed from absolute, still changeable through props.
* added modul1, popup with an x close in the upper right corner
* navigation font sizes adjusted (needs more work)

* readme updated for changes


**0.1.3**

* Fixed Holders 8-13 block 5 styles
* got rid of a tags in Brands, will rework Brand Blocks
* text-shadow added to headings and paragraphs
* border, border-left, border-right, border-top, border-bottom added to headings, paragraphs, holders, and toggler 1 & 2
* added box-shadow to dropdownnav1 and toggler1
* border-radius, text-align, and color added to dropdownnav1
* color also added to navbar, subnav 1 & 2
* got rid of default yellow hover highlight will be allow for easier adjusting of this soon
* toggler 1 now has z-index of 2000
* color, border, weight, shadow, margin, padding, variant, and background added to the toggler 1 & 2 button

* readme updated to reflect the changes

**0.1.0**
* text align added to heading and paragraph blocks
* Width and Height now available for heading and paragraph blocks

* mainHeading name changed to H1 + num
* Heading name changed to H2 + num
* SubHeading name changed to H3 + num
* SecondarySubHeading name changed to H4 + num
* Paragraph name changed to P + num
* PullQuote name changed to PLQ + num

* z Index of 1000 added to the DropDownNav1
* z Index of 200 added to the SubNavBAr1, this fixes a stacking issue

* css reset hooked up to every block

* readme updated to reflect changes

* fixed Holder4 block 3-5 styles

**0.0.12**
* readme was updated with minor documentation

**0.0.10**
* baselineish that things are mostly working