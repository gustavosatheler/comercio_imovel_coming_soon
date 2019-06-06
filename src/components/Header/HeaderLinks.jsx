/*eslint-disable*/
import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'

import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'

import Button from 'components/CustomButtons/Button.jsx'

import headerLinksStyle from 'assets/jss/material-kit-react/components/headerLinksStyle.jsx'

function HeaderLinks({ ...props }) {
	const { classes } = props
	return (
		<List className={classes.list}>
			<GridContainer>
				<GridItem xs={4} sm={4} md={4}>
					<ListItem className={classes.listItem}>
						<Tooltip
							id="twitter"
							title="Nos siga no Twitter"
							placement={window.innerWidth > 959 ? 'top' : 'right'}
							classes={{ tooltip: classes.tooltip }}
						>
							<Button href="https://twitter.com/alcendino" target="_blank" color="transparent" className={classes.navLink}>
								<i className={classes.socialIcons + ' fab fa-twitter'} />
							</Button>
						</Tooltip>
					</ListItem>
				</GridItem>
				<GridItem xs={4} sm={4} md={4}>
					<ListItem className={classes.listItem}>
						<Tooltip
							id="facebook"
							title="Nos siga no Facebook"
							placement={window.innerWidth > 959 ? 'top' : 'top'}
							classes={{ tooltip: classes.tooltip }}
						>
							<Button color="transparent" href="https://www.facebook.com/comerciodeimovel" target="_blank" className={classes.navLink}>
								<i className={classes.socialIcons + ' fab fa-facebook'} />
							</Button>
						</Tooltip>
					</ListItem>
				</GridItem>
				<GridItem xs={4} sm={4} md={4}>
					<ListItem className={classes.listItem}>
						<Tooltip
							id="instagram"
							title="Nos siga no Instagram"
							placement={window.innerWidth > 959 ? 'top' : 'left'}
							classes={{ tooltip: classes.tooltip }}
						>
							<Button color="transparent" href="https://www.instagram.com/comerciodeimovel" target="_blank" className={classes.navLink}>
								<i className={classes.socialIcons + ' fab fa-instagram'} />
							</Button>
						</Tooltip>
					</ListItem>
				</GridItem>
			</GridContainer>
		</List>
	)
}

export default withStyles(headerLinksStyle)(HeaderLinks)
