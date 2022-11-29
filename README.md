# TogleTableInput
A custom toggle button for table components in Boomi Flow

## Try the Demo!
[Check out the Toggle Table Input in action with this demo Flow](https://us.flow-prod.boomi.com/ef3210f4-6711-4ce9-ac6c-6212be3767e5/play/ToggleTime?flow-id=3272a051-4a87-4eec-856b-54625f2123c5)

## What it Does
This component renders a column of a table as toggle buttons.  These toggles act as checkboxes, returning 'true' if toggled true and 'false' otherwise.  These values can be applied to a string or boolean.

## Installation

1. Host the toggleTable.js file in your assets folder within Flow.
2. Get the URL of the toggleTable.js file.
3. Add this URL to your player as a custom resource.
4. On the page with the table you wish to have a toggle column, open the Metadata using the >_ button.
5. Search for the column of the table in the Metadata, and set the componentType of that column to "ToggleTableInput"
