<?php declare(strict_types=1);

namespace Frosh\Tools\Components\Health\Checker\PerformanceChecker;

use Frosh\Tools\Components\Health\Checker\CheckerInterface;
use Frosh\Tools\Components\Health\HealthCollection;
use Frosh\Tools\Components\Health\SettingsResult;

class AdminWorkerChecker implements CheckerInterface
{
    public function __construct(private readonly bool $adminWorkerEnabled)
    {
    }

    public function collect(HealthCollection $collection): void
    {
        if ($this->adminWorkerEnabled) {
            $collection->add(
                SettingsResult::warning(
                    'admin-watcher',
                    'Admin-Worker should be disabled',
                    'enabled',
                    'disabled',
                    'https://developer.shopware.com/docs/guides/plugins/plugins/framework/message-queue/add-message-handler#the-admin-worker'
                )
            );

            return;
        }

        $collection->add(
            SettingsResult::ok(
                'admin-watcher',
                'Admin-Worker is disabled',
                'disabled',
                'disabled'
            )
        );
    }
}
