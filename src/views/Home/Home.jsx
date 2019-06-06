// @material-ui/core components

import withStyles from '@material-ui/core/styles/withStyles'
import { Map as MapIcon, Phone as PhoneIcon } from '@material-ui/icons'
import image from 'assets/img/bg.jpg'
import loginPageStyle from 'assets/jss/material-kit-react/views/loginPage.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import Footer from 'components/Footer/Footer.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
// core components
import Header from 'components/Header/Header.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import NavPills from 'components/NavPills/NavPills.jsx'
import React from 'react'
import { isMobile } from 'react-device-detect'

import Contact from './Contact'

class Home extends React.Component {
	constructor(props) {
		super(props)
		// we use this to make the card to appear after the page has been rendered
		this.state = {
			cardAnimaton: 'cardHidden',
			tabs: [
				{
					tabButton: 'Contato',
					tabIcon: PhoneIcon,
					tabContent: <Contact />
				},
				{
					tabButton: 'Localização',
					tabIcon: MapIcon,
					tabContent: (
						<div>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.861349248743!2d-41.95184808462953!3d-18.84883178721861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb1a70550837acd%3A0xe2eacdee2b485c99!2sComercio+de+Im%C3%B3vel!5e0!3m2!1spt-BR!2sbr!4v1549677646684"
								width="100%"
								height="500"
								frameBorder="0"
								title="Localização: Matriz"
								style={{ border: 0 }}
								allowFullScreen
							/>
							<p style={{ float: 'left' }}>Rua Santos Fernandes de Sá, 1458 - Nossa Sra das Graças,  Gov. Valadares - MG</p>
						</div>
					)
				}
			]
		}
	}
	componentDidMount() {
		// we add a hidden class to the card and after 700 ms we delete it and the transition appears
		setTimeout(
			function() {
				this.setState({ cardAnimaton: '' })
			}.bind(this),
			700
		)
	}
	render() {
		const { classes, ...rest } = this.props
		return (
			<div>
				<Header absolute color="transparent" rightLinks={<HeaderLinks />} {...rest} />
				<div
					className={classes.pageHeader}
					style={{
						backgroundImage: 'url(' + image + ')',
						backgroundSize: 'cover',
						backgroundPosition: 'top center'
					}}
				>
					<div className={classes.container}>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={12}>
								<Card className={classes[this.state.cardAnimaton]}>
									<form className={classes.form}>
										<CardHeader color="primary" className={classes.cardHeader}>
											<h4>Em breve, uma nova maneira de alugar e comprar imóveis!</h4>
										</CardHeader>
										<CardBody>
											{isMobile ? (
												<NavPills color="primary" alignCenter={true} tabs={this.state.tabs} />
											) : (
												<NavPills
													horizontal={{
														tabsGrid: { xs: 12, sm: 2, md: 2 },
														contentGrid: { xs: 12, sm: 10, md: 10 }
													}}
													xcolor="primary"
													alignCenter={true}
													tabs={this.state.tabs}
												/>
											)}

											{/* <GridContainer justify="center">
												<GridItem xs={12} sm={12} md={6}>
													<h3 className={classes.title}>Contate-nos</h3>
												</GridItem>
												<GridItem xs={12} sm={12} md={6}>
													b
												</GridItem>
											</GridContainer> */}
										</CardBody>
										<CardFooter className={classes.cardFooter} />
									</form>
								</Card>
							</GridItem>
						</GridContainer>
					</div>
					<Footer whiteFont />
				</div>
			</div>
		)
	}
}

export default withStyles(loginPageStyle)(Home)
