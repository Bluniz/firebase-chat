import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.main)`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    background: ${theme.colors.background.gradient};

    overflow: hidden;

    ${theme.breakAt(theme.breakpoints.md)} {
      flex-direction: row;
    }
  `}
`;

export const IllustrationContainer = styled(motion.section)`
  ${({ theme }) => css`
    flex: 3;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.text.primary};

    & > h1 {
      font-size: 3rem;
    }

    & > span {
      padding-top: 1rem;
      font-size: 1.2rem;
    }

    & > img {
      width: 30rem;
      height: 30rem;
    }

    ${theme.breakAt(theme.breakpoints.md)} {
      flex: 3;

      & > h1 {
        font-size: 4rem;
      }

      & > span {
        padding-top: 1rem;
        font-size: 1.5rem;
      }

      & > img {
        width: 40rem;
        height: 40rem;
      }
    }
  `}
`;

export const PrincipalContainer = styled(motion.section)`
  ${({ theme }) => css`
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.text.primary};

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      & > span {
        font-size: 1.1rem;
        font-weight: 700;
      }

      & > strong {
        font-size: 3rem;
      }

      ${theme.breakAt(theme.breakpoints.md)} {
        justify-content: center;
        align-items: flex-start;

        & > strong {
          font-size: 4rem;
        }
        & > span {
          font-size: 1.5rem;
          font-weight: 700;
          display: block;
        }
      }
    }
    ${theme.breakAt(theme.breakpoints.md)} {
      border-left: 1px solid ${theme.colors.background.primary};
      justify-content: center;
      flex: 1;
    }
  `}
`;

export const Button = styled(motion.button)`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.background.primary};
    background: transparent;
    width: 100%;
    color: ${theme.colors.text.primary};
    font-weight: 500;
    font-size: 1.3rem;

    padding: 1rem 2rem;
    border-radius: 0.9rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    transition: border 0.2s;

    & > img {
      width: 2rem;
      height: 2rem;
    }

    &:hover {
      border: 2px solid ${theme.colors.green[300]};
      color: ${theme.colors.green[300]};
    }

    ${theme.breakAt(theme.breakpoints.md)} {
      border-color: ${theme.colors.background.primary};
    }
  `}
`;