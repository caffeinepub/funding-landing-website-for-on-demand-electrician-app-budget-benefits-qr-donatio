/**
 * Contact information constants
 * Single source of truth for all contact details
 */

export const CONTACT = {
  email: 'electrobeezindia@gmail.com',
  directors: [
    {
      name: 'Jugensing Tokbi',
      phone: {
        // E.164 format for tel: links
        raw: '+918638678880',
        // Formatted for display
        display: '+91 86386 78880',
      },
    },
    {
      name: 'Kamal Sing Bhumij',
      phone: {
        // E.164 format for tel: links
        raw: '+918135042741',
        // Formatted for display
        display: '+91 81350 42741',
      },
    },
    {
      name: 'David Gogoi',
      phone: {
        // E.164 format for tel: links
        raw: '+918638493216',
        // Formatted for display
        display: '+91 86384 93216',
      },
    },
  ],
} as const;
