import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {
	if (!localStorage.getItem('username')) return <LoginForm />;

	return (
		<ChatEngine
			height="100vh"
			projectID="3ce2d852-9d61-4375-9f75-9761b2afad83"
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
};

export default App;
