#include "accountinfo.h"
#include "accountmenu.h"
#include "environment.h"
#include "ui_accountmenu.h"

AccountMenu::AccountMenu(QWidget *parent)
    : QDialog(parent)
    , ui(new Ui::AccountMenu)
{
    ui->setupUi(this);
}

AccountMenu::~AccountMenu()
{
    delete ui;
}

void AccountMenu::setUsername(const QString &newUsername)
{
    username = newUsername;
    ui -> labelInfo -> setText(username);
}

void AccountMenu::setWebToken(const QByteArray &newWebToken)
{
    webToken = newWebToken;
    //qDebug()<<webToken;
}

void AccountMenu::on_btnSaldo_clicked()
{
    //en tiedä miten saada idaccount Card:ista joten käytän numeroa siihen asti.
    QString site_url=Environment::getBaseUrl()+"/account/balance/"+"1";//+username;
    QNetworkRequest request((site_url));
    //WEBTOKEN ALKU
    QByteArray myToken="Bearer "+webToken;
    request.setRawHeader(QByteArray("Authorization"),(myToken));
    //WEBTOKEN LOPPU
    infoManager = new QNetworkAccessManager(this);

    connect(infoManager, SIGNAL(finished (QNetworkReply*)), this, SLOT(infoSlot(QNetworkReply*)));

    reply = infoManager->get(request);
}

void AccountMenu::infoSlot(QNetworkReply *reply)
{
    response_data=reply->readAll();
    //qDebug()<<response_data;
    QJsonDocument json_doc = QJsonDocument::fromJson(response_data);
    QJsonObject json_obj = json_doc.object();
    accountInfo *objectAccountInfo = new accountInfo(this);
    objectAccountInfo -> setBalance(json_obj["balance"].toString());
    objectAccountInfo -> show();
    //qDebug()<<balance;
    reply->deleteLater();
    infoManager->deleteLater();

}

