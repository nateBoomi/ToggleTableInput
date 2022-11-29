# ToggleTableInput
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

### Setting up the Table
This process will create a table similar to the demo where the contents can be modified.

1. Under Settings, select Editable and Multi Select
2. Under Data Source, choose the type of data and select "Get the data from a list value"
3. Make sure that "The value that holds the data" and "Save the selection made by the user to" are the same list value where you want your data to be saved.
4. Unselect Multi Select in Settings
5. Add the relevant columns to Data Presentation
6. Add the following Attributes:
* Key "radio", Value "false"
* Key "isRowSelectionDisabled", Value "true"
7. Save the component
8. In the page metadata, apply the editable status and/or custom components to columns which should be editable
