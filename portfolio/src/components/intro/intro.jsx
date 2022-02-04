import './intro.css';
import me from '../../img/me.png';

const Intro = () => {
	return (
		<div className="intro">
			<div className="intro-left">
				<div className="intro-left-wrapper">
					<h2 className="intro-hello">Hello, My name is</h2>
					<h1 className="intro-name">Danny Lee</h1>
					<div className="intro-title">Frontend developer</div>
					<div className="intro-dec">
						An energetic and imaginative young web developer who is able to work
						alongside other talented IT professionals in creating websites to
						the very highest standards. I have the drive and massive energy
						needed to really make a difference to a project. Right now I am
						looking for an entry level position with an exciting company that
						wants to attract talented people.
					</div>
				</div>
			</div>
			<div className="intro-right">
				<div className="intro-bg"></div>
				<img src={me} className="intro-img" />
			</div>
		</div>
	);
};

export default Intro;
