// In your own jest-setup.js (or any other name)
import '@testing-library/jest-dom'
import 'jest-styled-components'

// In jest.config.js add (if you haven't already)
setupFilesAfterEnv: ['<rootDir>/jest-setup.js']
