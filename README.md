# React Context Example

This small project should explain how React Context works.

## Technologies

- NextJS
- Material-UI
- React Context

## Functionality

- Standard use of Context
- Using Context in the Consumer with the Hook
- Setting Context values from a Consumer (function in ReactContext)

## Running the project

Standard NextJS strartup:
Go in the folder and type

```bash
npm run dev
```

## How React Context works

### userContext
Check out /lib/userContext.js

This is the file setting up the Context.

Nothing fancy, just a value. The second param 
(the function) is not given here. 
No problem (but Typescript will loose its marbles on this probably)

### SetupUI

Check out ui/setup/setupui.js

There is the Context.Provider.

You **must** also put the useState there holding the variable of the Context.

The second param on the Context is a function which is able to set a new value. 
In this case simply the second param of the useState.
(Again, not set up in userContext.js, but you can only do that in JS, not TS)

Initial State use useState is passed on the Context

### Header
Check out ui/header/header.js

There we make use of the useContext hook to get 
the complete userContext. 

We only destructure the value ('user') because we 
don't need the second param here since we're not
setting the user in the header.js.

Just put the user on the screen 
(with a fancy ShowName here)

### Settings
This is a screen where we want to manipulate the
value of the context. 

Therefore we desctructure the 'setUser' function.

Since this is a setter from useState, we're using
it as such. 

So, button click sets just another hardcoded
name. 

Since it is state, rerender is done on the screen.


