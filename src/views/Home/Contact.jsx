import React, { Component, Fragment } from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'

import contatoStyle from 'assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx'

import user1 from 'assets/img/faces/alcendino.jpg'
import user2 from 'assets/img/faces/escritorio.jpg'

class Contact extends Component {
	render() {
		const { classes } = this.props
		const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid)
		return (
			<Fragment>
				<div className={classes.section}>
					<GridContainer>
						<GridItem xs={12} sm={12} md={6}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<img src={user2} alt="Foto: Matriz" className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Matriz
									<br />
									<small className={classes.smallTitle}>Rua Santos Fernandes de Sá, 1458</small>
								</h4>
								<CardBody>
									<p>
										<span>Contato</span>
										<br />
										<Button target="_blank" href="https://api.whatsapp.com/send?phone=553332214180" color="primary">
											<i className={'fab fa-whatsapp'} /> &nbsp; (33) 3221-4180
										</Button>
										<br />
										<Button target="_blank" href="tel:3332214180" color="primary">
											<i className={'fas fa-phone'} /> &nbsp; (33) 3221-4180
										</Button>
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter} />
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={6}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<img src={user1} alt="Foto: Alcendino Satheler" className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Alcendino Satheler
									<br />
									<small className={classes.smallTitle}>Corretor de Imóveis</small>
								</h4>
								<CardBody>
									<p>
										<span>Contato</span>
										<br />
										<Button target="_blank" href="https://api.whatsapp.com/send?phone=5533999895023" color="primary">
											<i className={'fab fa-whatsapp'} /> &nbsp; (33) 99989-5023
										</Button>
										<br />
										<Button target="_blank" href="tel:33999895023" color="primary">
											<i className={'fas fa-phone'} /> &nbsp; (33) 99989-5023
										</Button>
										<br />
										<Button target="_blank" href="tel:33988889099" color="primary">
											<i className={'fas fa-phone'} /> &nbsp; (33) 98888-9099
										</Button>
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter} />
							</Card>
						</GridItem>
					</GridContainer>
				</div>
			</Fragment>
		)
	}
}

export default withStyles(contatoStyle)(Contact)
