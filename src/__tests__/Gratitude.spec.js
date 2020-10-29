// import React from 'react';
// import renderer from "react-test-renderer"
// import userEvent from '@testing-library/user-event';
// import Gratitude from '../components/Gratitude';

// describe('<Gratitude />', () => {
//   let getByTestId;

//   describe('clicking the send button', () => {
//     let sendHandler;

//     beforeEach(async () => {
//     sendHandler = jest.fn().mockName('sendHandler');
//       ({ getByTestId } = renderer(<Gratitude onSend={sendHandler} />));

//     await userEvent.type(
//         getByTestId('messageText'),
//         'New message',
//     );
//     userEvent.click(getByTestId('sendButton'));
//     });

//     it('clears the text field', () => {
//     expect(getByTestId('messageText').value).toEqual('');
//     });
//     it('calls the send handler', () => {
//         expect(sendHandler).toHaveBeenCalledWith('New message');
//       });
//   });
// });