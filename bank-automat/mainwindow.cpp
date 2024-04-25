#include "environment.h"
#include "mainwindow.h"
#include "ui_mainwindow.h"
#include "qmessagebox"

#include <accountMenu.h>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_btnLogin_clicked()
{
    QString uname=ui->textUsername->text();
    QString passwd=ui->textPassword->text();
    QJsonObject jsonObj;
    jsonObj.insert("idCard",uname);
    jsonObj.insert("pin",passwd);

    QString site_url=Environment::getBaseUrl()+"/login";
    QNetworkRequest request((site_url));
    request.setHeader(QNetworkRequest::ContentTypeHeader, "application/json");

    loginManager = new QNetworkAccessManager(this);
    connect(loginManager, SIGNAL(finished (QNetworkReply*)), this, SLOT(loginSlot(QNetworkReply*)));

    reply = loginManager->post(request, QJsonDocument(jsonObj).toJson());
}

void MainWindow::loginSlot(QNetworkReply *reply)
{
    response_data=reply->readAll();
    QMessageBox msgBox;
    //qDebug()<<response_data;
    if(response_data=="-4078" || response_data.length()==0){

        msgBox.setText("Virhe tietoyhteydessä");
        msgBox.exec();
    }
    else{
        if(response_data!="false"){
            //msgBox.setText("ok");
            //msgBox.exec();
            //kirjautuminen onnistui
            AccountMenu *objectaccountMenu=new AccountMenu(this);
            objectaccountMenu->setUsername(ui->textUsername->text());
            objectaccountMenu->setWebToken(response_data);
            objectaccountMenu->show();
        }
        else{
            msgBox.setText("Tunnus/salasana ei täsmää");
            msgBox.exec();
            //ui->textUsername->clear();
            ui->textPassword->clear();
        }
    }
    reply->deleteLater();
    loginManager->deleteLater();


}

