// Challenge / Exercise

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import Events, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventRootLayout from "./pages/EventRootLayout";
import ErrorPage from "./pages/ErrorPage";

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// done
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// done
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// done
// 4. Add properly working links to the MainNavigation
// done
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// done
// 6. Output a list of dummy events to the EventsPage
// done
//    Every list item should include a link to the respective EventDetailPage
// done
// 7. Output the ID of the selected event on the EventDetailPage
// done
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
// done
const router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [
    {
      //  path: '',
      index: true,
      element: <HomePage />
    },
    {
      path: 'events', element: <EventRootLayout />, children: [
        {
          //  path: '',
          index: true,
          element: <Events />,
          loader: eventsLoader,
        },
        { path: ':eventId', element: <EventDetailPage /> },
        { path: 'new', element: <NewEventPage /> },
        { path: ':eventId/edit', element: <EditEventPage /> },
      ]
    },
  ]
}])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
