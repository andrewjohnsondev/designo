import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
/* CSS RESET */
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[class],
ol[class] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Basic styles */
	body {
		font-family: 'Jost', sans-serif;
		font-weight: 400;
		color: ${({ theme }) => theme.colors.secondary.darkGrey};
		overflow: ${({ isMenuOpen }) => (isMenuOpen ? 'hidden' : 'visible')};
	}

	@media(min-width: ${({ theme }) => theme.breakpoints.md}) {
		body {
			overflow: auto;
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		font-weight: 500;
		line-height: 1;
	}

	h2 {
		letter-spacing: 2px;
	}

	h3 {
		letter-spacing: 5px;
	}

	/* font size setup */
	.text-small {
		font-size: ${({ theme }) => theme.textSize.mobile.sm};
	}
	.text-base {
		font-size: ${({ theme }) => theme.textSize.mobile.base};
	}
	.text-md {
		font-size: ${({ theme }) => theme.textSize.mobile.md};
	}
	.text-lg {
		font-size: ${({ theme }) => theme.textSize.mobile.lg};
	}
	.text-xl {
		font-size: ${({ theme }) => theme.textSize.mobile.xl};
	}


	@media (min-width: 48em) {
		.text-small {
		font-size: ${({ theme }) => theme.textSize.desktop.sm};
		}
		.text-base {
			font-size: ${({ theme }) => theme.textSize.desktop.base};
		}
		.text-md {
			font-size: ${({ theme }) => theme.textSize.desktop.md};
		}
		.text-lg {
			font-size: ${({ theme }) => theme.textSize.desktop.lg};
		}
		.text-xl {
			font-size: ${({ theme }) => theme.textSize.desktop.xl};
		}
	}

`;
