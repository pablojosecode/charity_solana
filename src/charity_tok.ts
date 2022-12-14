import { Keypair, Connection, PublicKey, Transaction } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID, Token, AccountLayout } from "@solana/spl-token";
import { DecimalUtil, deriveATA, resolveOrCreateATA } from "@orca-so/common-sdk";
import { Wallet } from '@project-serum/anchor'
import { Jupiter, RouteInfo } from "@jup-ag/core";
import { Fetcher } from 'swr';
import MathUtil from 'mathutil';

const whirlpoolAddress = PDAUtil.getWhirlpool(....)publicKey;
const whirlpoolData = await fetcher.getPool(whirlpoolAddress);

// Get PDA based on your desired sequence
const startTick = TickUtil.getStartTickIndex(whirlpoolData.tickCurrentIndex, whirlpoolData.tickSpacing);
const tickArrayKey = PDAUtil.getTickArray(ORCA_WHIRLPOOL_PROGRAM_ID, whirlpoolAddress, startTick);


// This swap assumes the swap will not cross the current tick-array's boundaries
const currencySent = DecimalUtil.fromNumber(10, tokenADecimal);

const swapInput: SwapInput = {
    amount: currencySent,
    otherAmountThreshold: MathUtil.ZERO,
    sqrtPriceLimit: MathUtil.toX64(new Decimal(4.95)),
    amountSpecifiedIsInput: true,
    aToB: true,
    tickArray0: tickArrays[0],
    tickArray1: tickArrays[1],
    tickArray2: tickArrays[2]
}

// Send the transaction
const tokenAccountA, tokenAccountB = ...
const oraclePda = PDAUtil.getOracle(ctx.program.programId, whirlpoolPda.publicKey);
const tx = toTx(
    ctx,
    WhirlpoolIx.swapIx(ctx.program, {
        whirlpool: whirlpoolAddress,
        tokenAuthority: ctx.wallet.publicKey,
        tokenOwnerAccountA: tokenAccountA,
        tokenVaultA: whirlpoolData.tokenVaultA,
        tokenOwnerAccountB: tokenAccountB,
        tokenVaultB: whirlpoolData.tokenVaultB,
        oracle: oraclePda.publicKey,
    })
  
  await tx.buildAndExecute();


import bs58 from 'bs58'

const wallet = new Wallet(Keypair.fromSecretKey(bs58.decode("5HVQtBtGeBb2EnMFqfWPpEaYNMjGLumkjPGD313HsaQ5t5c9mjgiFR1BT15ZXXyQ1qKrH8hSuFpgZ5HsVqpahu5W")));

import * as readline from 'readline';

import { TOKEN_LIST_URL } from "@jup-ag/core";
import { useState, useEffect } from 'react';
import { JupiterProvider, useJupiter } from "@jup-ag/react-hook";
import fetch from "node-fetch"



import secret from "../wallet.json";
import { getSpeedDialIconUtilityClass } from "@mui/material";
import { ORCA_WHIRLPOOL_PROGRAM_ID, PDAUtil, SwapInput, SwapUtils, TickUtil, toTx, WhirlpoolIx } from "@orca-so/whirlpools-sdk";

const RPC_ENDPOINT_URL = "https://api.devnet.solana.com";
const COMMITMENT = 'confirmed';
// Create a connection for sending RPC requests to Devnet
const connection = new Connection(RPC_ENDPOINT_URL, COMMITMENT);
let toSpend = 0;
let key = "6U54ZGfUZYvQviRzb3BJeoj5U81SJgjtw39GArTJDNX9";

// Read in the private key from wallet.json (The public and private key pair will be managed using the Keypair class)
const keypair = Keypair.fromSecretKey(new Uint8Array(secret));
const SOL_MINT = new PublicKey("Jd4M8bfJG3sAkd82RsGWyEXoaBXQP7njFzBwEaCTuDa");
const DEV_SAMO_DECIMALS = 9;


// Destination wallet for the devSAMO
let dest_pubkey = new PublicKey("6YNvv1iv8354CopYGdeR5rF3sbue8ESjPeukXR54KuUQ");
let sol_balance = 0;
let amount = 1_000_000_000; // 1 devSAMO

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {




    // Display the RPC and the wallet's public key
    // When displaying the public key, use base58 encoding
    console.log("endpoint:", connection.rpcEndpoint);
    console.log("wallet pubkey:", keypair.publicKey.toBase58());

    // Obtain the SOL balance
    // Use the getBalance method from the Connection class
    // https://solana-labs.github.io/solana-web3.js/classes/Connection.html#getBalance
    sol_balance = await connection.getBalance(keypair.publicKey);

    // Display the SOL balance
    // Since SOL is internally managed as an integer value and denominated in lamports,
    // divide by 10^9 to obtain a value denominated in SOL.
    //console.log("lamports:", sol_balance);
    // Initialize a connection to the RPC and read in private key
    //console.log("endpoint:", connection.rpcEndpoint);
    //console.log("wallet pubkey:", keypair.publicKey.toBase58());

    // devSAMO
    // https://everlastingsong.github.io/nebula/

    // Amount to send
    let amount = 1_000_000_000; // 1 devSAMO
    var response;

    let key = ("CRqZvwS4Gbu55TwyZrfmRWMrMku6W9NmWvd5XMNiZfoq");


    console.log("HEY THERE! Do you want to donate to charity? There are a lot of great causes.");
    console.log("Do you want to look into helping...\n Homelessness [h]\n, Higher Education [he]\n, Teens [t]\n, the Environment [e]\n, people in Poverty [p]\n, animal welfare [a]\n, or a Humanitarian Crisis [u]?");
    let donatingTo = "none";

    rl.question('', (answer) => {
        const ans = answer.toLowerCase();
        if (ans == 'h') {
            console.log("Shelters to Shutters is a national 501c3 organization that transitions individuals and families at risk of or experiencing homelessness to economic self-sufficiency by providing full time employment, housing and career training opportunities in partnership with the real estate industry.");
            donatingTo = "h";
            key = ("CRqZvwS4Gbu55TwyZrfmRWMrMku6W9NmWvd5XMNiZfoq");
        }
        if (ans == 'he') {
            console.log("Haverford College is a private liberal arts college in Haverford, Pennsylvania. It plans on using donations to provide scholarships and update its facilities.");
            donatingTo = "he";
            key = ("5WKCkLEKQ2xJN7z7dGWaXCvwZpuvcQqKyzbQ3ERTosnq");
        }
        if (ans == 't') {
            console.log("The Teen Challenge of Arizona is a program focusing on providing troubled youth and families with an effective and comprehensive solution to their problems in order to help them productive members of society. They work alongside certified counselors to help people become \???mentally sound, emotionally balanced, socially adjusted, physically well and spiritually alive.\???");
            donatingTo = "t";
            key = ("6U54ZGfUZYvQviRzb3BJeoj5U81SJgjtw39GArTJDNX9");
        }
        if (ans == 'e') {
            console.log("The 7 Lakes Alliance is an organization which uses scientific research and methods to protect the Belgrade Lakes Region watershed, and promote conservation within the area.");
            donatingTo = "e";
            key = ("6ZfdaedfnD3Ua4cX1MjFUvVsQ8VhGGUwxMWkxj7u21qY");
        }
        if (ans == 'p') {
            console.log("GiveDirectly is a nonprofit that lets donors like you send money directly to the world???s poorest households. They believe people living in poverty deserve the dignity to choose for themselves how best to improve their lives ??? cash enables that choice");
            donatingTo = "p";
            key = ("pWvDXKu6CpbKKvKQkZvDA66hgsTB6X2AgFxksYogHLV");
        }
        if (ans == 'a') {
            console.log("North Shore Animals is the world's largest no-kill animal rescue and adoption organization. They are committed to saving and rehabilitating the lives of homeless animals and educating the public about the joys and responsibilities of rescue.");
            donatingTo = "a";
            key = ("G6xvp7Pw4ax8QFeBqTtyWGLqRXnPrswLVJFiWjoPLMtD");
        }
        if (ans == 'u') {
            console.log("Around the world, children, women, and men are facing enormous obstacles. Poverty, disaster, violent conflict, and the acute impacts of climate change all have been complicated by the global pandemic. Today, you can join MERCY CORPS  to help build a world where all can prosper. Your gift can help them mobilize their teams in response to humanitarian crises in places like Ukraine, deliver lifesaving assistance to Yemeni children displaced by violent conflict, reach earthquake survivors in Haiti and Indonesia, provide families in DR Congo access to clean water, help farmers affected by the economic consequences of COVID-19, and so much more.");
            donatingTo = "u";
            key = ("AHYrbFVNtTovCz63XNCneCkCccPWpYssryoTVXgvQQ6W");
        }
        spend(sol_balance, key);
        rl.close();
    });

}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function spend(sol_balance, key) {
    let rl2 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    await delay(6000);
    console.log("You have a whopping", sol_balance / 10 ** 9, "SOL tokens");
    console.log("Do you want to donate some of your crypto to them? (y/n)");

    rl2.question('', (answer) => {
        console.log("INSDIE");

        let ans = answer.toLowerCase();
        if (ans == 'y') {
            console.log("Awesome!");
            console.log("OKAY, What percentage? ");
            percentage(sol_balance, key);
        }
        else {
            console.log("Well, maybe next time!");
            return;
        }


        rl2.close();
    });

    rl2.close();
    console.log("Awesome!");
    console.log("OKAY, How much should we send? ");
    percentage(sol_balance, key);

}


async function percentage(sol_balance, key) {
    let rl3 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl3.question('', (answer) => {
        toSpend = parseInt(answer);
        amount = toSpend;
        console.log("GREAT! Sending " + toSpend + " dev Samo tokens");
        Swap(key);
        rl3.close();
    });
}

async function spendIt(key) {

    // devSAMO
    // https://everlastingsong.github.io/nebula/
    const DEV_SAMO_MINT = new PublicKey("Jd4M8bfJG3sAkd82RsGWyEXoaBXQP7njFzBwEaCTuDa");
    const DEV_SAMO_DECIMALS = 9;

    // Destination wallet for the devSAMO
    const dest_pubkey = new PublicKey(key);

    // Amount to send

    // Obtain the associated token account from the source wallet
    const src_token_account = await deriveATA(keypair.publicKey, DEV_SAMO_MINT);

    // Obtain the associated token account for the destination wallet.
    const { address: dest_token_account, ...create_ata_ix } = await resolveOrCreateATA(
        connection,
        dest_pubkey,
        DEV_SAMO_MINT,
        () => connection.getMinimumBalanceForRentExemption(AccountLayout.span),
        DecimalUtil.toU64(DecimalUtil.fromNumber(0)),
        keypair.publicKey
    );

    // Create the instruction to send devSAMO
    const transfer_ix = Token.createTransferCheckedInstruction(
        TOKEN_PROGRAM_ID,
        src_token_account,
        DEV_SAMO_MINT,
        dest_token_account,
        keypair.publicKey,
        [],
        amount,
        DEV_SAMO_DECIMALS
    );

    // Create the transaction and add the instruction
    const tx = new Transaction();
    // Create the destination associated token account (if needed)
    create_ata_ix.instructions.map((ix) => tx.add(ix));
    // Send devSAMO
    tx.add(transfer_ix);

    // Send the transaction
    const signers = [keypair];
    const signature = await connection.sendTransaction(tx, signers);
    console.log("signature:", signature);

    // Wait for the transaction to be confirmed
    const latestBlockhash = await connection.getLatestBlockhash();
    await connection.confirmTransaction({
        blockhash: latestBlockhash.blockhash,
        lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
        signature
    });
}

async function Swap(key) {
    const routeMap = await (
        await fetch("https://quote-api.jup.ag/v1/route-map")
    ).json();
    const allInputMints = Object.keys(routeMap);

    const swappableOutputForSol = routeMap["Jd4M8bfJG3sAkd82RsGWyEXoaBXQP7njFzBwEaCTuDa"];


    //console.log("THE OUTPUT IS " + swappableOutputForSol[0]);

    const { data } = await (
        await fetch(
            'https://quote-api.jup.ag/v3/quote?inputMint=Jd4M8bfJG3sAkd82RsGWyEXoaBXQP7njFzBwEaCTuDa&outputMint=So11111111111111111111111111111111111111112&amount=100000000&slippageBps=50'
        )
    ).json()
    const routes = data

    console.log("HERE " + typeof (routes));
    const toPrint = JSON.stringify(routes)
    console.log("ROUTES " + (toPrint));

    const transactions = await (await (
        fetch("https://quote-api.jup.ag/v1/swap", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                route: routes[0],
                userPublicKey: key,
                wrapUnwrapSOL: true,
            }),
        })
    )).json();

    console.log("transaction type " + typeof (transactions));
    const toPrintIt = JSON.stringify(transactions)
    console.log("to Print " + (toPrintIt));

    console.log("transactions: " + (transactions));
    const { setupTransaction, swapTransaction, cleanupTransaction } = transactions
    for (let serializedTransaction of [setupTransaction, swapTransaction, cleanupTransaction].filter(Boolean)) {
        // get transaction object from serialized transaction
        const transaction = Transaction.from(Buffer.from(serializedTransaction, 'base64'))
        // perform the swap
        const txid = await connection.sendTransaction(transaction, [wallet.payer], {
            skipPreflight: true
        })
        //await connection.confirmTransaction(txid)
        console.log(`https://solscan.io/tx/${txid}`)
    }

    console.log("finished");

}

main();

