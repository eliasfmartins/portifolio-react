import { Transition, TransitionGroup } from 'react-transition-group';
import { ReactNode, useContext } from 'react';
import { ReduceContext } from '../reducer/context';
type COntainerProps = {
  children: ReactNode;
}

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};
const reducerContext = useContext(ReduceContext);
const { reducerState, reducerDispatch } = reducerContext;

export const Container = ({ children }: COntainerProps) => (

  <TransitionGroup>
    <Transition
      key={reducerState.title}
      timeout={duration}
      appear={true}
      enter={true}
      exit={true}
    >
      {(status) => (
        <div style={{
          ...defaultStyle,
          ...(status === 'entering' || status === 'entered' ? transitionStyles[status] : null)
        }}>
          {children}
        </div>
      )}
    </Transition>
  </TransitionGroup>
);
