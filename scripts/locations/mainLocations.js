import initializeDetailButtonEvents from '/scripts/dialogs_locations.js'
import { useLocation } from "/scripts/locations/LocationDataProvider.js"
import LocationListComponent from "/scripts/locations/LocationList.js"
import { useQuote } from "/scripts/quotes/QuoteDataProvider.js"
import QuoteListComponent from "/scripts/quotes/QuoteList.js"

// initializeDetailButtonEvents();
LocationListComponent()
QuoteListComponent()