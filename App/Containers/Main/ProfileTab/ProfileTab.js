import React from 'react'
import { ScrollView } from 'react-native'
import { View, Grid, Col, Row, Card, CardItem, Text } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './ProfileTabStyle'
import CardStyles from 'App/Theme/CardStyles'
import SocialMediaCard from './SocialMedia/SocialMediaCard'
import UserForm from './UserForm/UserForm'
import HelperForm from './HelperForm/HelperForm'

class ProfileTab extends React.Component {
  componentDidMount() { }

  render() {
    const isUser = this.props.user.user_metadata.role === 'user';
    return (
      <ScrollView>
        <View style={Style.container}>
          <Grid>
            <Col>
              {isUser && <Row style={{ justifyContent: 'center' }}><SocialMediaCard /></Row>}
              <Row style={{ justifyContent: 'center' }}>
                <Card style={CardStyles.card}>
                  <CardItem header style={CardStyles.cardHeader}>
                    <Text style={CardStyles.cardHeaderText}>Profile Information</Text>
                  </CardItem>
                  <View style={CardStyles.cardContent}>
                    {isUser ? <UserForm profile={this.props.user} /> : <HelperForm profile={this.props.user} />}
                  </View>
                </Card>
              </Row>
            </Col>
          </Grid>
        </View >
      </ScrollView >
    )
  }
}

ProfileTab.propTypes = {
  user: PropTypes.object,
}

const mapStateToProps = (state) => ({
  user: state.user.user,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTab)
