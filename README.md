# Take-home test for Alma for Brendan Gibson

## To run locally

- `git clone git@github.com:brendangibson/alma.git`
- `cd alma`
- `npm install`
- `npm run dev`

then browser to the [home page](http://localhost:3000) or the [admin page](http://localhost:3000/admin)

## System Design

### API Endpoint

`app/api/leads/route.ts` returns a list of mocked leads

### Authentication

Navigate to [admin page](http://localhost:3000/admin) to see a mock authentication. You are not required to enter a username, nor a password. Just click on `Authenticate` to continue.

### Form Validation

The `First Name`, `Email`, and `Visas` fields are required in the form. The `Email` field requires a valid email. The validation uses the `JSONForms` default validation.

### Styling

Global styles are in `globals.css`. CSS variables are used where possible.

Component styles use Styled Components.

### Forms

The homepage form, the mock authentication, and the filters for the leads table all use JSONForms.

### State

The leads state is maintained by Redux. The loaded leads are added to the Redux state and clicking on the status buttons in the leads table also updates the Redux state.

### Types

Typescript has been used throughout the code.

## Design Choices

### Visual Design

I chose to use the `Montserat` font as it fairly closely mapped to the screenshots defined in the spec for the headings. For the other text, I chose to use Verdana.

The spacing between components is vaguely similar to the screenshots. Without an object spec, I didn't want to spend too much time getting to close the correct values.

Images were cut from the screenshots, cropped, and had a transparent background added. The quality could be imprived with an object spec.

The form fields use Material Design which comes by default with JSONForms.

Wherever possible, the CSS units are relative to the screen size or font-size (vh, vw, rem) to make the app slightly responsive.

### UX

There is very little navigation implemented. The user is required to add `/admin` to the home page URL to navigate to the Admin Page. Similarly the navigation links on the left navigation do not go anywhere.

The Submit button on the homepage form does not do anything apart from show a confirmation message.

The filters for the leads table do nothing. Neither do the column sort direction buttons. Ideally these would be implemented using Redux.

## Testing

Run `npm run test` to run the (one) unit test.
