import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import matthew from '../../asset/img/matthew.png'

const CardExampleImageCard = () => (
	<Card>
		<Image src={matthew} />
		<Card.Content>
			<Card.Header>Daniel</Card.Header>
			<Card.Meta>Joined in 2016</Card.Meta>
			<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
		</Card.Content>
		<Card.Content extra>
			<a>
				<Icon name='user' />
				10 Friends
			</a>
		</Card.Content>
	</Card>
)

export default CardExampleImageCard