import 'react-alice-carousel/lib/alice-carousel.css';
import styled from 'styled-components';

export const CarouselContainer = styled.div`
	width: 100%;
	grid-column: 1 / -1;
	height: auto;
	margin: 0;
	padding: 0 0 48px 185px;
	box-sizing: border-box;
	overflow: hidden;

	.alice-carousel {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border: 2px solid ${({ theme }) => theme.colors.light.beigeBox};
    background-color: ${({ theme }) => theme.colors.light.beigeBox};
    border-radius: 20px;
	}
	.alice-carousel__stage {
		white-space: nowrap;
    margin-left: 20px;
	}
  
  .alice-carousel__wrapper {
    min-height: 600px;
    align-content: center;
  }

	.alice-carousel__stage-item {
		box-sizing: border-box;
		display: inline-block;
		vertical-align: top;
		width: 345px !important;
		margin-right: 72px;
		padding: 0;
		line-height: normal;

		figure {
			width: 345px;
			margin: 0;
			cursor: pointer;
		}

		img {
			display: block;
			width: 345px;
			height: 515px;
			object-fit: cover;
      border-radius: 165px;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
			transition: transform 250ms ease, box-shadow 250ms ease;

			&:focus-visible {
				outline: 3px solid ${({ theme }) => theme.colors.dark.brown0};
				outline-offset: 6px;
			}
		}

		figcaption {
			margin-top: 18px;
			color: ${({ theme }) => theme.colors.dark.brown0};
			font-family: ${({ theme }) => theme.fonts.main};
			font-size: 18px;
			line-height: 1.2;
			text-align: center;
			transition: transform 250ms ease, color 250ms ease;
		}

		figure:hover img {
			transform: scale(1.03);
			box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.18);
		}

		figure:hover figcaption {
			transform: translateY(2px) scale(1.04);
			color: ${({ theme }) => theme.colors.dark.brown1 || theme.colors.dark.brown0};
		}
	}

	.alice-carousel__prev-btn,
	.alice-carousel__next-btn {
		padding: 0;
    padding-bottom: 5px;
	}

	.alice-carousel__prev-btn-item,
	.alice-carousel__next-btn-item {
		background: transparent;
		border: 0;
		color: ${({ theme }) => theme.colors.dark.brown0};
		font-size: 25px;
    height: 25px;
		padding: 0;
	}

	.alice-carousel__dots {
		margin: 5px 3px 5px;
	}

	.alice-carousel__dots-item:hover {
		transform: scale(1.1);
	}

	.alice-carousel__dots-item:not(.__custom) {
		background-color: ${({ theme }) => theme.colors.dark.brown0};
	}

	@media (max-width: 600px) {
		padding: 0 20px 32px;

		.alice-carousel__stage-item {
			margin-right: 72px;
		}
	}
`;