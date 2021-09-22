import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
	return (
		<ChatEngine
			height="100vh"
			projectID="3ce2d852-9d61-4375-9f75-9761b2afad83"
			userName="Jamespeters"
			userSecret="12345"
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
};

export default App;
