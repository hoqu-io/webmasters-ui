import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from 'material-ui'
import { withStyles } from 'material-ui/styles'
import {
  CheckCircle,
  ShowChart,
  AttachMoney,
  TouchApp,
  ChatBubble,
  Smartphone,
  Mail,
  PermContactCalendar
} from 'material-ui-icons'

import { skype, telegram, metamask } from 'resources/images'
import { text } from 'resources'
import { Chart } from 'components/common'

import { actions } from 'data'
import { Application } from 'layouts'

import DashboardCard from './card'
import classes from './classes'

const map = ({
  application: { language },
  dashboard: { isReady, currentWeek, previousWeek }
}) => ({
  language,
  isReady,
  currentWeek,
  previousWeek
})

export default withStyles(classes)(
  actions(map)(({
    language,
    classes,
    isReady,
    currentWeek,
    previousWeek
  }) => {
    const t = text(language, 'dashboard')

    return (
      <Application loading={!isReady}>
        <div className={classes.cardBlock}>
          <DashboardCard
            color='lime'
            title={t('totalLeads')}
            value={(typeof currentWeek === 'object'
              ? Object.keys(currentWeek)
              : []).reduce((acc, key) => acc + currentWeek[key].total, 0)}
            icon={ShowChart}
          />
          <DashboardCard
            color='purple'
            title={t('soldLeads')}
            value={(typeof currentWeek === 'object'
              ? Object.keys(currentWeek)
              : []).reduce((acc, key) => acc + currentWeek[key].sold, 0)}
            icon={CheckCircle}
          />
          <DashboardCard
            color='red'
            title={t('conversion')}
            value={
              ((typeof currentWeek === 'object'
                ? Object.keys(currentWeek)
                : []).reduce((acc, key) => acc + currentWeek[key].sold, 0) /
                (typeof currentWeek === 'object'
                  ? Object.keys(currentWeek)
                  : []).reduce((acc, key) => acc + currentWeek[key].total, 0) *
                100 || 0) + '%'
            }
            icon={TouchApp}
          />
          <DashboardCard
            color='blue'
            title={t('earnedHQX')}
            value='1000'
            icon={AttachMoney}
          />
        </div>
        <div className={classes.chartBlock}>
          <Card classes={{ root: classes.chartContainer }}>
            <div className={classes.chart}>
              <Chart
                title={t('earnedSpent')}
                xAxisLabel={Object.keys(currentWeek)
                  .reverse()
                  .map(
                    item =>
                      `${('0' + new Date(+item).getDate()).slice(-2)}.${('0' + (new Date(+item).getMonth() + 1)).slice(-2)}`
                  )}
                yAxisData={[
                  {
                    name: t('earned'),
                    type: 'line',
                    data: [424, 902, 345, 64, 1240, 123, 1098],
                    color: '#4286f4',
                    area: true
                  },
                  {
                    name: t('spent'),
                    type: 'line',
                    data: [360, 700, 242, 122, 800, 409, 400],
                    color: '#f9888e',
                    area: true
                  }
                ]}
                yAxisRightMax={100}
              />
            </div>
          </Card>
          <Card classes={{ root: classes.chartContainer }}>
            <div className={classes.chart}>
              <Chart
                title={t('totalLeads')}
                xAxisLabel={Object.keys(currentWeek)
                  .reverse()
                  .map(
                    item =>
                      `${('0' + new Date(+item).getDate()).slice(-2)}.${('0' + (new Date(+item).getMonth() + 1)).slice(-2)}`
                  )}
                yAxisData={[
                  {
                    name: t('totalLeads'),
                    type: 'bar',
                    data: Object.keys(currentWeek)
                      .reverse()
                      .map(item => currentWeek[item].total),
                    color: '#fb8c54'
                  },
                  {
                    name: t('soldLeads'),
                    type: 'bar',
                    data: Object.keys(currentWeek)
                      .reverse()
                      .map(item => currentWeek[item].sold),
                    color: '#f9888e'
                  },
                  {
                    name: t('cr'),
                    index: 1,
                    type: 'line',
                    data: Object.keys(currentWeek)
                      .reverse()
                      .map(item => currentWeek[item].sold / currentWeek[item].total * 100 || 0)
                  }
                ]}
                yAxisRightMax={100}
                boundaryGap
              />
            </div>
          </Card>
        </div>
        <div className={classes.widgetsBlock}>
          <div className={classes.widgetsLeft}>
            <Card>
              <CardHeader
                classes={{
                  root: classes.cardHeader,
                  title: classes.cardHeaderTitle
                }}
                title={t('recentStats')}
              />
              <CardContent classes={{ root: classes.cardContentTable }}>
                <div className={classes.tableContainer}>
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow classes={{ root: classes.tableRow }}>
                        <TableCell>{t('date')}</TableCell>
                        <TableCell numeric>{t('totalLeads')}</TableCell>
                        <TableCell numeric>{t('soldLeads')}</TableCell>
                        <TableCell numeric>{t('cr')}, %</TableCell>
                        <TableCell numeric>{t('earned')}</TableCell>
                        <TableCell numeric />
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Object.keys(currentWeek).map(item => {
                        return (
                          <TableRow
                            classes={{ root: classes.tableRow }}
                            key={item}
                          >
                            <TableCell
                            >{`${('0' + new Date(+item).getDate()).slice(-2)}.${('0' + (new Date(+item).getMonth() + 1)).slice(-2)}.${new Date(
                                +item
                              )
                                .getFullYear()
                                .toString()
                                .substr(-2)}`}</TableCell>
                            <TableCell numeric>
                              {currentWeek[item].total}
                            </TableCell>
                            <TableCell numeric>
                              {currentWeek[item].sold}
                            </TableCell>
                            <TableCell numeric>
                              {(currentWeek[item].sold /
                                currentWeek[item].total *
                                100 || 0) + '%'}
                            </TableCell>
                            <TableCell numeric>{0}</TableCell>
                            <TableCell numeric>{<Button color='primary'>{t('view')}</Button>}</TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                </div>
                <div />
              </CardContent>
            </Card>
            <Card>
              <CardHeader
                classes={{
                  root: classes.cardHeader,
                  title: classes.cardHeaderTitle
                }}
                title={t('refusedCalls')}
              />
              <CardContent classes={{ root: classes.cardContentTable }}>
                <div className={classes.tableContainer}>
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow classes={{ root: classes.tableRow }}>
                        <TableCell>ID</TableCell>
                        <TableCell>{t('program')}</TableCell>
                        <TableCell>{t('date')}</TableCell>
                        <TableCell>{t('duration')}</TableCell>
                        <TableCell>{t('state')}</TableCell>
                        <TableCell>{t('actions')}</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow classes={{ root: classes.tableRow }}>
                        <TableCell>349319</TableCell>
                        <TableCell>
                          hoqu offer demo (#42871) Online: купонный
                        </TableCell>
                        <TableCell>2017-11-30 04:13:59</TableCell>
                        <TableCell>00:34</TableCell>
                        <TableCell>Refused<ChatBubble /></TableCell>
                        <TableCell>{t('actions')}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className={classes.buttonContainer}>
                  <Button color='primary'>
                    {t('seeAllRefused')}
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader
                classes={{
                  root: classes.cardHeader,
                  title: classes.cardHeaderTitle
                }}
                title={t('activePrograms')}
              />
              <CardContent classes={{ root: classes.cardContentTable }}>
                <div className={classes.tableContainer}>
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow classes={{ root: classes.tableRow }}>
                        <TableCell>{t('title')}</TableCell>
                        <TableCell>{t('total')}</TableCell>
                        <TableCell>{t('month')}</TableCell>
                        <TableCell>{t('week')}</TableCell>
                        <TableCell>{t('today')}</TableCell>
                        <TableCell />
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow classes={{ root: classes.tableRow }}>
                        <TableCell>hoqu offer demo</TableCell>
                        <TableCell>320.00</TableCell>
                        <TableCell>80.00</TableCell>
                        <TableCell>0.00</TableCell>
                        <TableCell>0.00</TableCell>
                        <TableCell><Button color='primary'>{t('view')}</Button></TableCell>
                      </TableRow>
                      <TableRow classes={{ root: classes.tableRow }}>
                        <TableCell>hoqu offer demo</TableCell>
                        <TableCell>320.00</TableCell>
                        <TableCell>80.00</TableCell>
                        <TableCell>0.00</TableCell>
                        <TableCell>0.00</TableCell>
                        <TableCell><Button color='primary'>{t('view')}</Button></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className={classes.buttonContainer}>
                  <Button color='primary'>{t('allPrograms')}</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader
                classes={{
                  root: classes.cardHeader,
                  title: classes.cardHeaderTitle
                }}
                title={t('recentOffers')}
              />
              <CardContent classes={{ root: classes.cardContent }}>
                <Typography>
                  {t('noNewOffers')}
                </Typography>
                <div className={classes.buttonContainer}>
                  <Button color='primary'>{t('allOffers')}</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader
                classes={{
                  root: classes.cardHeader,
                  title: classes.cardHeaderTitle
                }}
                title={t('payoutRequests')}
              />
              <CardContent classes={{ root: classes.cardContent }}>
                <Typography>
                  {t('noPayoutRequests')}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className={classes.widgetsRight}>
            <Card>
              <CardHeader
                classes={{
                  root: classes.cardHeader,
                  title: classes.cardHeaderTitle
                }}
                title={t('accountBalance')}
              />
              <CardContent classes={{ root: classes.cardContent }}>
                <div className={classes.textContainer}>
                  <img src={metamask} className={classes.textContainerPicture} />
                  <div className={classes.textContainerText}>
                    <Typography variant='subheading' classes={{ root: classes.subheading }}>
                      3200 HQX
                    </Typography>
                    <Typography>
                      {t('total')}
                    </Typography>
                  </div>
                </div>
                <Divider />
                <div className={classes.buttonContainer}>
                  <Button
                    color='primary'
                    className={classes.button}
                  >
                    {t('wallet')}
                  </Button>
                  <Button
                    color='secondary'
                    className={classes.button}
                  >
                    {t('history')}
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader
                classes={{
                  root: classes.cardHeader,
                  title: classes.cardHeaderTitle
                }}
                title={t('myNetworks')}
              />
              <CardContent classes={{ root: classes.cardContent }}>
                <div className={classes.textContainer}>
                  <Avatar className={classes.textContainerPicture}>
                    M
                  </Avatar>
                  <div className={classes.textContainerText}>
                    <Typography variant='subheading' classes={{ root: classes.subheading }}>
                      Marketcall
                    </Typography>
                    <Typography>
                      {t('activeNetwork')}
                    </Typography>
                    <Divider />
                  </div>
                </div>
                <div className={classes.textContainer}>
                  <Avatar className={classes.textContainerPicture}>
                    MO
                  </Avatar>
                  <div className={classes.textContainerText}>
                    <Typography variant='subheading' classes={{ root: classes.subheading }}>
                      Move.su
                    </Typography>
                    <Divider />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader
                classes={{
                  root: classes.cardHeader,
                  title: classes.cardHeaderTitle
                }}
                title={t('myManager')}
              />
              <CardContent classes={{ root: classes.cardContent }}>
                <div className={classes.textContainer}>
                  <img src='https://app.hoqu.io/images/userpics/101/200x200/1444724093.jpg' className={classes.textContainerPicture} />
                  <div className={classes.textContainerText}>
                    <Typography variant='subheading' classes={{ root: classes.subheading }}>
                      Илья Мещеряков
                    </Typography>
                    <Typography>
                      Marketcall
                    </Typography>
                  </div>
                </div>
                <Divider />
                <div className={classes.managerContent}>
                  <div>
                    <div className={classes.managerContact}>
                      <Smartphone />
                      <Typography className={classes.phoneNumber}>+79265375322</Typography>
                    </div>
                    <div className={classes.managerContact}>
                      <Mail />
                      <Typography>ilya.m@marketcall.ru</Typography>
                    </div>
                    <div className={classes.managerContact}>
                      <img src={skype} />
                      <Typography>maxanich28</Typography>
                    </div>
                    <div className={classes.managerContact}>
                      <img src={telegram} />
                      <Typography>@Ilya_Shniper</Typography>
                    </div>
                    <div className={classes.managerContact}>
                      <PermContactCalendar />
                      <Typography>Mon.-Fri., 09:30 - 18:30</Typography>
                    </div>
                  </div>
                </div>
                <Divider />
                <div className={classes.buttonContainer}>
                  <Button color='primary'>
                    {t('sendAMessage')}
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader
                classes={{
                  root: classes.cardHeader,
                  title: classes.cardHeaderTitle
                }}
                title={t('myTickets')}
              />
              <CardContent classes={{ root: classes.cardContent }}>
                <Typography>
                  {t('noTickets')}
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardHeader
                classes={{
                  root: classes.cardHeader,
                  title: classes.cardHeaderTitle
                }}
                title={t('news')}
              />
              <CardContent classes={{ root: classes.cardContent }}>
                <div className={classes.newsItem}>
                  <Typography variant='caption'>
                    24.11.2017
                  </Typography>
                  <Typography>
                    HOQU Announces Main Sale Shifts — Great News for all Investors!
                  </Typography>
                </div>
                <Divider />
                <div className={classes.newsItem}>
                  <Typography variant='caption'>
                    24.11.2017
                  </Typography>
                  <Typography>
                    HOQU Announces Main Sale Shifts — Great News for all Investors!
                  </Typography>
                </div>
                <Divider />
                <div className={classes.newsItem}>
                  <Typography variant='caption'>
                    24.11.2017
                  </Typography>
                  <Typography>
                    HOQU Announces Main Sale Shifts — Great News for all Investors!
                  </Typography>
                </div>
                <Divider />
                <div className={classes.newsItem}>
                  <Typography variant='caption'>
                    24.11.2017
                  </Typography>
                  <Typography>
                    HOQU Announces Main Sale Shifts — Great News for all Investors!
                  </Typography>
                </div>
                <Divider />
                <div className={classes.newsItem}>
                  <Typography variant='caption'>
                    24.11.2017
                  </Typography>
                  <Typography>
                    HOQU Announces Main Sale Shifts — Great News for all Investors!
                  </Typography>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader
                classes={{
                  root: classes.cardHeader,
                  title: classes.cardHeaderTitle
                }}
                title={t('referralProgram')}
              />
              <CardContent classes={{ root: classes.cardContentTable }}>
                <div className={classes.tableContainer}>
                  <Table className={classes.table}>
                    <TableBody>
                      <TableRow classes={{ root: classes.tableRow }}>
                        <TableCell>{t('yourPercentage')}</TableCell>
                        <TableCell>5%</TableCell>
                      </TableRow>
                      <TableRow classes={{ root: classes.tableRow }}>
                        <TableCell>{t('totalReferrals')}</TableCell>
                        <TableCell>0</TableCell>
                      </TableRow>
                      <TableRow classes={{ root: classes.tableRow }}>
                        <TableCell>{t('earnedPerMonth')}</TableCell>
                        <TableCell>0.00 HQX</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div />
              </CardContent>
            </Card>
          </div>
        </div>
      </Application>
    )
  })
)
