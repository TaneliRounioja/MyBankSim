#ifndef ACCOUNTMENU_H
#define ACCOUNTMENU_H

#include <QDialog>
#include <QtNetwork>
#include <QNetworkAccessManager>
#include <QJsonDocument>

namespace Ui {
class AccountMenu;
}

class AccountMenu : public QDialog
{
    Q_OBJECT

public:
    explicit AccountMenu(QWidget *parent = nullptr);
    ~AccountMenu();

    void setUsername(const QString &newUsername);

    void setWebToken(const QByteArray &newWebToken);

private slots:
    void on_btnSaldo_clicked();
    void infoSlot(QNetworkReply *reply);

private:
    Ui::AccountMenu *ui;
    QString username;
    QByteArray webToken;

    QNetworkAccessManager *infoManager;
    QNetworkReply *reply;
    QByteArray response_data;
};

#endif // ACCOUNTMENU_H
